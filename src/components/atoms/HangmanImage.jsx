// src/components/atoms/HangmanImage.jsx

export const HangmanImage = ({ errorCount, images, image }) => {
    const imgSrc = image || (errorCount > 0 && errorCount <= images.length ? images[errorCount - 1] : null);
  
    return (
<div className="w-[300px] h-[300px] flex items-center justify-center mt-4">
  {imgSrc ? (
    <img
      src={imgSrc}
      alt={`Hangman error ${errorCount}`}
      className="max-w-full max-h-full object-contain"
    />
  ) : null}
</div>

    );
  };
  
  