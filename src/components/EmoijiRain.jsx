function EmojiRain({ emoji }) {
  const count = 20;

  return (
    <div className="emoji-rain">
      {Array.from({ length: count }).map((_, i) => (
        <span
          //   key={i}
          className="emojis-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.6}s`,
            fontSize: `${22 + Math.random() * 10}px`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default EmojiRain;
