import Jubilee from '../assets/jubilee.png'
import APA from '../assets/APA.png'
import OldMutual from '../assets/oldmutual.png'
import Britam from '../assets/britam.png'
import Cannon from '../assets/cannon.png'
import AAR from '../assets/AAR.png'
import Pacis from '../assets/pacis.png'
import CIC from '../assets/cic.png'

const insurers = [
  { name: "Jubilee Insurance", logo: Jubilee },
  { name: "APA Insurance", logo: APA },
  { name: "Old Mutual", logo: OldMutual },
  { name: "Britam", logo: Britam },
  { name: "Cannon General", logo: Cannon },
  { name: "AAR Insurance", logo: AAR },
  { name: "Pacis Insurance", logo: Pacis },
  { name: "CIC Group", logo: CIC }
];

export default function InsurerLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="uppercase text-xs font-bold text-amber-500 tracking-widest">Our Partners</span>
          <h3 className="text-2xl md:text-3xl font-black text-blue-950 mt-2">Trusted Insurers We Work With</h3>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {insurers.map((insurer, idx) => (
            <div
              key={idx}
              className="
                flex justify-center items-center
                transition-all duration-300
                hover:scale-110 hover:shadow-lg hover:bg-amber-50
                rounded-xl p-2
                group
              "
            >
              <img
                src={insurer.logo}
                alt={insurer.name}
                className="h-12 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}