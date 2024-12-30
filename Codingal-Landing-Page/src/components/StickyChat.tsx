
const StickyChatButton = () => {
  const handleChatClick = () => {
    alert("Chat feature coming soon!");
  };

  return (
    <div>
      <button
        onClick={handleChatClick}
        className="font-poppins fixed bottom-6 right-6 bg-[#ff5c4b] p-3 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition transform hover:scale-105"
      >
        Chat with Us
      </button>
    </div>
  );
};

export default StickyChatButton;
