import Particles from "react-tsparticles"

const ParticleBackground = () => {
  return (
    <div className="App">
        <Particles
        options={{
          background: {
            color: "#0e378a",
          },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                  reize: true
              },
            },
            particles: {
                color: {
                  value: "#efefefe"
                },
                number: {
                  density: {
                    enable: true,
                    area: 1080,
                  },
                  limit: 0,
                  value: 400,
                },
                opacity: {
                  animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 1,
                    sync: false
                  },
                  random: { 
                    enable: true,
                    minimumValue: 0.05,
                  },
                  value: 1
                },
                shape: {
                  type: "circle",    
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 0.05,
                  }
                }
            },
        }} />
    </div>
  )
}

export default ParticleBackground