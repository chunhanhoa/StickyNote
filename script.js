// Danh sách lời cổ vũ tích cực
const affirmations = [
  "Mỗi ngày trôi qua, bạn lại upgrade nhẹ một tí rồi đó!",
  "Bạn xứng đáng với mọi điều tốt đẹp – từ trà sữa đến tình yêu.",
  "Tin mình đi, bạn thông minh và giỏi giang hơn bạn nghĩ nhiều!",
  "Hôm nay sẽ là một ngày xịn xò, tin vậy đi!",
  "Yêu bản thân không phải trend nữa, nó là lifestyle rồi – bạn theo kịp chưa?",
  "Bạn có đủ sức mạnh để cân hết drama và deadline.",
  "Niềm vui là do bạn chọn, mà bạn chọn thì auto xịn rồi.",
  "Bạn có gu rất riêng và nó... tỏa sáng kiểu đáng yêu ghê á!",
  "Tình yêu và lòng biết ơn? Bạn có cả đống trong tim luôn.",
  "Bạn là một chiếc máy sáng tạo chạy bằng năng lượng cute.",
  "Mỗi bước đi của bạn là tiến gần đến phiên bản 'xịn nhất' của mình.",
  "Bạn xứng đáng được yêu thương như cách mèo được cưng chiều vậy đó.",
  "Nhìn lại đi, bạn có quyền tự hào về chính mình mà.",
  "Thay đổi là tốt – miễn là bạn không đổi gu nghe nhạc đẹp đẽ kia nhé.",
  "Tình huống nào cũng có điểm sáng, và bạn là đèn pin chính hiệu.",
  "Nguồn năng lượng tích cực từ bạn đang lan tỏa đó, thấy hông?",
  "Ước mơ của bạn không xa đâu, cứ đi từ từ mà chắc.",
  "Bạn được bao quanh bởi tình yêu và... mấy đứa bạn hơi bị chất lượng.",
  "Đừng từ bỏ ước mơ, trừ khi bạn muốn đổi sang cái còn lớn hơn 😎.",
  "Bạn mạnh mẽ kiểu: nhẹ nhàng với thế giới, nhưng quyết liệt vì bản thân.",
  "Mỗi lần vấp ngã là một lần học cách... ngã đẹp hơn.",
  "Bạn chỉ cần tốt hơn hôm qua một chút thôi là ổn rồi.",
  "Nỗ lực của bạn sẽ không phản bội bạn – trà sữa có thể, nhưng nỗ lực thì không.",
  "Bạn đang dần trở thành phiên bản khiến chính mình ngưỡng mộ.",
  "Tâm trí bạn chill như nhạc lo-fi, còn tim bạn thì ấm như ly cacao.",
  "Hít một hơi sâu vô – bạn đang nạp lại năng lượng siêu nhân đó!",
  "Cảm ơn vũ trụ vì đã cho chúng ta một người tuyệt như bạn!",
  "Niềm vui thì không tự tới, nhưng bạn có thể kéo nó về với nụ cười đó 😄.",
  "Bạn sẽ để lại dấu ấn nhẹ nhàng mà 'dính lâu' trên trái tim mọi người.",
  "Bạn làm chủ cuộc sống mình – không ai khác có remote cả!",
  "Bạn mạnh mẽ như cafe sáng, nhưng ngọt ngào như bánh flan.",
  "Bạn xứng đáng với mọi thứ đẹp đẽ – từ công việc ngon đến người thương xịn.",
  "Hôm nay là một ngày ngon lành cho bạn bứt phá đó, tận dụng đi!",
  "Trực giác của bạn đáng tin lắm, giống như Google... nhưng đáng yêu hơn.",
  "Bạn đang viết nên câu chuyện đời mình – và nó đang hấp dẫn lắm đó.",
  "Những điều nhỏ bé bạn biết ơn hôm nay, mai sẽ thành điều lớn lao thôi!",
  "Bạn không cần hoàn hảo – bạn chỉ cần thật lòng và dễ thương như bây giờ là đủ rồi.",
  "Bạn đã sống sót qua 100% những ngày tệ – đó là siêu năng lực đó nha!",
  "Hôm nay bạn không cần làm gì to tát, chỉ cần thở và cười thôi cũng đủ đáng yêu rồi.",
  "Có những ngày lười là bình thường – não bạn cũng cần nghỉ dưỡng chứ!",
  "Bạn làm được mà, không phải vì phải làm, mà vì bạn có thể!",
  "Chỉ cần là bạn – là đã quá tuyệt vời để thế giới này có rồi!",
  "Bạn không 'chậm tiến' đâu, bạn đang đi theo nhịp riêng của mình thôi.",
  "Hôm nay mà có ai làm bạn buồn, nhớ là bạn còn có trà sữa, âm nhạc và... mình nè!",
  "Đôi khi mọi thứ rối tung lên, chỉ để sắp xếp lại theo cách đẹp hơn.",
  "Bạn đã đi xa hơn bạn nghĩ – thử ngoái lại xem, sẽ tự thấy tự hào á!",
  "Nếu bạn cảm thấy mệt, nghỉ một tí thôi, chứ đừng bỏ cuộc nha.",
  "Bạn không cần phải 'ổn' mọi lúc – cứ là thật với cảm xúc của mình đi.",
  "Bạn là ánh sáng le lói trong những ngày u ám – nhẹ nhàng mà quý giá cực.",
  "Thất bại không đáng sợ bằng việc không dám thử – mà bạn thì dũng cảm đó giờ mà nhỉ?",
  "Ai đó ngoài kia đang mỉm cười vì có bạn trên đời đó, thật đó!",
  "Bạn là một phần quan trọng trong câu chuyện của ai đó – đừng quên điều đó nha!",
  "Bạn không cần phải giống ai cả – bạn vốn đã là phiên bản hiếm rồi.",
  "Sự dịu dàng của bạn là vũ khí mạnh mẽ hơn bạn nghĩ nhiều.",
  "Ngày mai có thể lo sau, hôm nay bạn chỉ cần chọn một điều khiến bạn thấy dễ chịu.",
  "Bạn không trễ, bạn chỉ đang trên hành trình riêng – và hành trình đó cực kỳ đáng quý.",
  "Chuyện gì rồi cũng qua – kể cả deadline và đau lòng.",
  "Mỗi nụ cười của bạn là vitamin tích cực cho cả vũ trụ đó nha!",
  "Bạn đang phát triển từng chút một – và thế là quá giỏi rồi!",
  "Bạn luôn có quyền bắt đầu lại – ngay cả khi đó là lần thứ 274.",
  "Bạn không nhỏ bé – bạn chỉ đang ở giữa một vũ trụ lớn đang yêu thương bạn thầm lặng.",
  "Có thể bạn không thấy rõ tiến trình, nhưng nó đang diễn ra – và bạn đang làm tốt.",
  "Bạn là lý do khiến thế giới này đẹp hơn một chút – thiệt đó!",
  "Lúc bạn im lặng nghỉ ngơi cũng là lúc bạn đang hồi phục sức mạnh rồi đấy.",
  "Bạn không cần chạy đua – bạn chỉ cần đi đúng hướng, và bạn đang làm điều đó.",
  "Bạn là một nhân vật chính dễ thương trong bộ phim đời mình, đừng quên nhé!",
  "Bình tĩnh, bạn đang làm tốt mà – đừng để não cá vàng của bạn đánh lừa.",
  "Deadline sợ bạn chứ bạn không sợ deadline, hiểu hông?",
  "Bạn không cần hoàn hảo, chỉ cần online đúng giờ là đã giỏi hơn mình rồi.",
  "Người ta sống để yêu, bạn sống để chill – cũng được mà!",
  "Đừng lo, hôm nay bạn vẫn là người tử tế nhất trong danh sách bạn bè của mình.",
  "Nếu hôm nay không ổn lắm thì mai mình bắt đầu lại – vũ trụ không tính đâu!",
  "Bạn là ánh mặt trời... dù đôi khi hơi ngủ nướng.",
  "Dù cuộc đời hơi lag, bạn vẫn đáng yêu và có tiềm năng bùng nổ nha!",
  "Làm hết sức, nghỉ hết mình, rồi ăn snack tiếp – bạn biết sống lắm á!",
  "Không sao đâu, tâm trạng có lên xuống là chuyện của... đồ thị sống.",
  "Bạn không lười, bạn đang nạp năng lượng như powerbank thôi!",
  "Bạn chính là lý do khiến emoji 🥺 tồn tại.",
  "Thật ra bạn siêu có gu á, chỉ là chưa có ai thưởng thức đúng gu bạn thôi.",
  "Bạn không 'vô dụng' – bạn là file đang loading thôi, kiên nhẫn nha.",
  "Bạn không cần toả sáng mọi lúc – đèn ngủ cũng chill mà đúng không?",
  "Hôm nay bạn chỉ cần sống sót là đã win rồi đó!",
  "Bạn không phải 'đi chậm', bạn đang 'đi có phong cách'.",
  "Không ai hoàn hảo – nhưng bạn gần gần lắm rồi đó nha!",
  "Bạn là vibe dễ thương trong một thế giới hơi quá nghiêm túc.",
  "Bạn đáng yêu kể cả lúc đang hoang mang nha, biết không?",
  "Bạn là soft girl/boy/non-binary thần thái – không ai thay thế được vibe đó.",
  "Làm từ từ thôi, miễn là bạn còn bước tiếp là bạn giỏi rồi!",
  "Bạn giỏi chịu đựng hơn bạn nghĩ, nhưng cũng xứng đáng được nghỉ ngơi nhiều hơn bạn cho phép.",
  "Bạn là phiên bản xịn nhất của mình – chỉ là đang update nhẹ chút xíu thôi.",
  "Bạn đáng giá không vì những gì bạn làm, mà vì chính bạn là bạn.",
  "Thật ra bạn đang inspire người khác mà không biết đó!",
  "Bạn không drama – bạn chỉ đang sống thật với cảm xúc thôi nè.",
  "Mọi chuyện sẽ ổn – hoặc ít nhất là có trà sữa giúp bạn đối mặt.",
  "Bạn có thể không giỏi toán, nhưng bạn giỏi làm người dễ thương!",
  "Nếu không ai nói bạn tuyệt vời hôm nay – thì để mình nói: bạn tuyệt vời thiệt đó!"
];

// Lấy các phần tử DOM
const currentDateElement = document.getElementById("current-date");
const affirmationElement = document.getElementById("affirmation");
const newAffirmationButton = document.getElementById("new-affirmation");

// Định dạng ngày tháng
function formatDate(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("vi-VN", options);
}

// Lấy câu cổ vũ dựa theo ngày trong năm
function getAffirmationForToday() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  const index = dayOfYear % affirmations.length;
  return affirmations[index];
}

// Lấy câu cổ vũ ngẫu nhiên
function getRandomAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  return affirmations[randomIndex];
}

// Hiển thị ngày và câu cổ vũ
function displayDailyContent() {
  const today = new Date();
  currentDateElement.textContent = formatDate(today);
  affirmationElement.textContent = getAffirmationForToday();

  // Thêm các bong bóng trang trí
  createDecorations();
}

// Tạo phần tử trang trí cho background
function createDecorations() {
  const container = document.querySelector("body");
  // Tạo 5 bong bóng trang trí
  for (let i = 0; i < 5; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.width = `${Math.random() * 30 + 20}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * 80 + 10}%`;
    bubble.style.top = `${Math.random() * 80 + 10}%`;
    bubble.style.animationDuration = `${Math.random() * 8 + 7}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(bubble);
  }
}

// Thêm hiệu ứng khi nhấn nút
newAffirmationButton.addEventListener("click", function () {
  // Hiệu ứng nhấn nút
  this.style.transform = "scale(0.95)";
  setTimeout(() => {
    this.style.transform = "";
  }, 150);

  // Thay đổi câu cổ vũ
  affirmationElement.style.opacity = 0;

  setTimeout(() => {
    affirmationElement.textContent = getRandomAffirmation();
    affirmationElement.style.opacity = 1;
  }, 300);
});

// Khi trang web được tải
window.addEventListener("DOMContentLoaded", () => {
  displayDailyContent();

  // Thêm hiệu ứng cho affirmation
  affirmationElement.style.transition = "opacity 0.3s ease";
});
