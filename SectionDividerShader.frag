#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Constants
const float PI = 3.14159265359;
const vec2 HASH_SEED = vec2(12.9898, 78.233);
const float HASH_MULT = 43758.5453123;

// Wave noise parameters - adjust these to control scale and dimensions
const float WAVE_FREQUENCY = 2.0;        // How many wave cycles vertically
const float WAVE_DISTORTION = 2.0;       // How much the waves bend/distort
const float NOISE_SCALE_X = 4.0;         // Horizontal noise stretch (higher = more stretched)
const float NOISE_SCALE_Y = 1.;         // Vertical noise stretch
const float NOISE_SPEED = .1;         // Animation speed of wave distortion
const float TEXTURE_NOISE_SPEED = .5;

// Improved hash function
float hash(vec2 p) {
    return fract(sin(dot(p, HASH_SEED)) * HASH_MULT);
}

// Generate gradient vector from hash
vec2 grad(float h) {
    float angle = h * 2.0 * PI;
    return vec2(cos(angle), sin(angle));
}

// Perlin noise implementation
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f); // Smoothstep interpolation
    
    // Get gradients at corners
    vec2 g00 = grad(hash(i));
    vec2 g10 = grad(hash(i + vec2(1.0, 0.0)));
    vec2 g01 = grad(hash(i + vec2(0.0, 1.0)));
    vec2 g11 = grad(hash(i + vec2(1.0, 1.0)));
    
    // Calculate dot products
    float n00 = dot(g00, f);
    float n10 = dot(g10, f - vec2(1.0, 0.0));
    float n01 = dot(g01, f - vec2(0.0, 1.0));
    float n11 = dot(g11, f - vec2(1.0, 1.0));
    
    // Bilinear interpolation
    return mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y);
}

// Parabolic curve function
float parabola(float x, float k) {
    return pow(4.0 * x * (1.0 - x), k);
}

void main() {
    // Pixelation setup (non-square pixels)
    float pixel_height = u_resolution.y / 6.0;
    float pixel_width = pixel_height * 0.6;
    vec2 pixel_size = vec2(pixel_width, pixel_height);
    vec2 pixelated_coord = floor(gl_FragCoord.xy / pixel_size) * pixel_size + pixel_size * 0.5;
    vec2 st = pixelated_coord / u_resolution.x;
    
    // Primary noise for wave distortion
    vec2 noise_coord = vec2(st.x * NOISE_SCALE_X, st.y * NOISE_SCALE_Y);
    float primary_noise = noise(noise_coord + u_time * NOISE_SPEED) * 0.5 + 0.5;
    
    // Create wavy lines
    float line_pattern = fract(st.y * WAVE_FREQUENCY + primary_noise * WAVE_DISTORTION);
    float line_width = 1.0 - parabola(line_pattern, 0.6);

    float texture_noise = noise(st * 50.0 + u_time * TEXTURE_NOISE_SPEED) * 0.5 + 0.5;
    line_width += texture_noise * 0.1;
    line_width = clamp(line_width, 0.1, .9);
    
    // Calculate visibility based on pixel position within line
    float local_x = fract(gl_FragCoord.x / pixel_width);
    float half_width = line_width * 0.5;
    float visibility = step(0.5 - half_width, local_x) * step(local_x, 0.5 + half_width);
    
    // Color mixing
    vec3 bg_color = vec3(0.074, 0.074, 0.086);
    vec3 line_color = vec3(0.65, 0.64, 0.89);
    vec3 final_color = mix(bg_color, line_color, visibility);
    
    gl_FragColor = vec4(final_color, 1.0);
}