varying vec2 uvInternal;
uniform vec2 px;


precision highp float;

void main(){
    vec3 pos = position;
    uvInternal = 0.5 + pos.xy * 0.5;
    vec2 n = sign(pos.xy);
    pos.xy = abs(pos.xy) - px * 1.0;
    pos.xy *= n;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}