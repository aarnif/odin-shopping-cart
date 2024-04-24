import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full flex-grow max-w-[1600px] my-24 flex flex-col">
        <Section
          isEven={true}
          header="Our Story"
          content={[
            "Fantasy Art emerged from a deep-seated love for the fantastical that spans countless genres—from epic literature and cinematic adventures to tabletop games and folklore. This passion has been nurtured by generations of dreamers who find joy and escape in the worlds of the unreal and the imagined. With a history rich in diverse expressions of fantasy, our founders were inspired to create a unique space dedicated to this enchanting realm.",
            "In founding Fantasy Art, the goal was to establish more than just a shop; it was to build a vibrant community hub for artists and aficionados alike. Here, we cherish the spirit of collaboration and the shared joy of discovery, creating a welcoming atmosphere where fans of fantasy can connect, discuss, and enjoy art that transports them to other worlds. Join us in celebrating the legacy of fantasy and the collective adventure it offers, where each piece of art is a portal to a new and magical journey.",
          ]}
        />
        <Section
          isEven={false}
          header="Art"
          content={[
            "At Fantasy Art, we specialize in hyperrealistic fantasy art, a style that brings the impossible vividly to life with astonishing detail and precision. Our collection showcases breathtaking landscapes that seem to pulse with magic, creatures drawn with such intricacy that they appear ready to leap from the canvas, and heroic figures portrayed with an intensity that captures every emotion. This approach allows us to offer art that not only tells a story but does so with a realism that might make you question the boundaries between our world and the realms of fantasy.",
            "Each piece in our collection is a testament to the skill and dedication of our artists, who employ a blend of traditional techniques and modern digital tools to create visuals that are both captivating and immersive. Our art is selected for its ability to mesmerize and inspire, offering you a gateway to worlds that, while fantastical, feel as real as your own. Whether you're looking to decorate your space with a scene from a distant, mystical land or gift someone a portrait of a creature of legend, Fantasy Art provides a unique connection to the marvels of the fantastical, rendered with a realism unmatched in its execution.",
          ]}
        />
        <Section
          isEven={true}
          header="Artists"
          content={[
            "At the core of Fantasy Art are our artists, exceptional talents from around the world who specialize in hyperrealistic fantasy art. Each artist brings a unique perspective and unparalleled skill to their work, capturing the essence of fantasy with a realism that blurs the line between fiction and reality. Our platform proudly presents both renowned and emerging artists, each selected for their ability to infuse their artworks with life-like detail and vibrant emotion.",
            "Through detailed artist profiles, we offer a window into the creative minds that shape our collection. These profiles highlight the artists' techniques, inspirations, and personal journeys, providing insight into the meticulous processes that result in such powerful and realistic art. When you purchase from Fantasy Art, you are not only acquiring a piece of exquisite art; you are also supporting these visionary artists in their continuous quest to explore and expand the boundaries of realist fantasy art.",
          ]}
        />
      </div>
    </>
  );
};

export default Home;
