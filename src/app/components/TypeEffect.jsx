import Typewriter from 'typewriter-effect';

const TypeEffect = () => {
  const strings = [
    "Front-end Web Developer",
    "Computer Science Student",
  ];

  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(strings[0])
          .pauseFor(4000)
          .deleteAll()
          .start()
          .typeString(strings[1])
          .pauseFor(4000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeEffect;