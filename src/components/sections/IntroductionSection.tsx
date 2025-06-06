import profile from '@/assets/profile.jpeg';
import Image from '@/components/Image';

export default function IntroductionSection(){
    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src={profile} 
                alt="Profile Picture"
                width={400}
                height={400}
                rounded="full"
                className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-teal-light/20 dark:border-teal/20"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-navy dark:text-cream">
                Welcome to My Portfolio
              </h1>
              <p className="text-lg md:text-xl text-navy/80 dark:text-cream/80">
                I build exceptional digital experiences with modern web technologies.
              </p>
            </div>
          </div>
        </section>
    );
}