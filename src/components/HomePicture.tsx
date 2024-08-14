import profilePicture from "/homePicture.jpg";
import sunglassesPhoto from "/sunglassesPhoto.jpg";

const HomePicture = () => {
  return (
    <section className="w-full h-48 md:h-auto relative group">
      <img
        src={profilePicture}
        alt="Nice picture for the home page."
        className="w-full h-full object-cover"
      />
      <img
        src={sunglassesPhoto}
        alt="Another picture on hover."
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </section>
  );
};

export default HomePicture;
