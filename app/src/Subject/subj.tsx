import Title from "../Title/Title";
import { additonalInfo } from "./additonalInfo";

type SubjectProps = {
    name: string;
    description: string;
    links: {
      test: string;
      materials: string;
    };
  };
  
  export default function Subject({ name, description, links }: SubjectProps) {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
            
  
          {/* Title */}
          <Title>{name}</Title>
  
          {/* Description */}
          <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
            {description}
          </p>

        
  
          {/* Buttons */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href={links.test}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
            >
              Перейти до тесту
            </a>
            <a
              href={links.materials}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl transition duration-300"
            >
              Матеріали
            </a>
          </div>
        </div>
      </section>
    );
  }
  

  const description = () => {

  }