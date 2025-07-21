#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse; // Mouse position in screen coordinates

// Optimized constants
const float PI2 = 6.28318530718;
const vec2 HASH_SEED = vec2(12.9898, 78.233);

// Combined parameters
const float WAVE_FREQ = 6.0;
const float WAVE_DISTORT = 6.0;
const vec2 NOISE_SCALE = vec2(20.0, 0.1);
const vec2 NOISE_SPEED = vec2(0.1, 0.5);

// Fast hash function
float hash(vec2 p) {
    return fract(sin(dot(p, HASH_SEED)) * 43758.5453);
}

// Simplified noise using built-in smoothstep
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = smoothstep(0.0, 1.0, f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

void main() {
    // Simplified pixelation
    vec2 pixel_size = vec2(u_resolution.y * 0.14, u_resolution.y * 0.2);
    vec2 st = floor(gl_FragCoord.xy / pixel_size) / u_resolution;
    
    // Combined noise calculation
    float wave_noise = noise(st * NOISE_SCALE + u_time * NOISE_SPEED.x);
    
    // Wavy lines with simplified parabolic curve
    float line_pattern = fract(st.y * WAVE_FREQ + wave_noise * WAVE_DISTORT);
    float line_curve = line_pattern * (1.0 - line_pattern) * 4.0; // Simplified parabola
    float line_width = 1.0 - line_curve * line_curve;
    
    // Add texture noise
    line_width += noise(st * 50.0 + u_time * NOISE_SPEED.y) * 0.1;
    line_width = clamp(line_width, 0.1, 0.9);
    
    // Visibility calculation
    float local_x = fract(gl_FragCoord.x / pixel_size.x);
    float half_width = line_width * 0.5;
    float visibility = smoothstep(0.5 - half_width, 0.5 - half_width + 0.01, local_x) * 
                      smoothstep(0.5 + half_width, 0.5 + half_width - 0.01, local_x);
    
    // Final color
    vec3 final_color = mix(vec3(0.074, 0.074, 0.086), vec3(0.65, 0.64, 0.89), visibility);
    gl_FragColor = vec4(final_color, 1.0);
}