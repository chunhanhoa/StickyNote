// Danh sách lời cổ vũ tích cực
const affirmations = [
   "Mỗi lần bạn cười là một lần deadline run sợ đó nha!",
  "Nếu cuộc đời là bộ phim thì bạn là cảnh đẹp nhất trong đó.",
  "Trà sữa có thể hết, nhưng sự dễ thương của bạn thì vô hạn.",
  "Bạn không lạc đường, bạn chỉ đang... chạy bản đồ mở rộng thôi!",
  "Có bạn ở đây là timeline hôm nay sáng hẳn ra đó.",
  "Lúc bạn mỉm cười, vũ trụ like post đó nha!",
  "Bạn không vô hình đâu – bạn chỉ đang ở chế độ 'ẩn hiện thần bí' thôi.",
  "Nét duyên của bạn không phải dạng vừa đâu nha!",
  "Trái tim bạn đáng yêu như một meme trending vậy đó.",
  "Không ai có thể làm 'phiên bản bạn' tốt hơn bạn được.",
  "Hôm nay bạn chưa cần hoàn hảo, chỉ cần... có mặt là tuyệt rồi!",
  "Cứ làm từ từ, thành công không phải đồ ăn nhanh đâu nè!",
  "Bạn không cần 'giỏi nhất', chỉ cần tiếp tục là đủ giỏi rồi.",
  "Mỗi ngày dậy sớm là một bước tiến gần hơn đến chiếc gối yêu thích.",
  "Bạn không yếu đuối – bạn đang recharge thôi!",
  "Một ngày mới – một lần bạn lại đáng yêu hơn hôm qua.",
  "Đừng so bản nháp của mình với highlight của người ta nha.",
  "Hôm nay buồn thì mai chill lại – bạn kiểm soát vibe của mình mà!",
  "Bạn là kiểu người mà... vũ trụ thấy là muốn chụp hình kỷ niệm á!",
  "Bạn làm tốt hơn bạn nghĩ nhiều, nên đừng nghi ngờ bản thân hoài nha!",
  "Bạn không cần nhanh – chỉ cần bền bỉ, và bạn đang làm rất tốt!",
  "Bạn là nhân vật chính, đừng để mấy vai phụ quyết định mood của bạn!",
  "Dù bạn cảm thấy mông lung, vẫn đang có ai đó nhìn bạn với ánh mắt ngưỡng mộ.",
  "Tình trạng hiện tại không định nghĩa bạn – nhưng nỗ lực của bạn thì có đó!",
  "Hôm nay có thể xám xịt, nhưng bạn vẫn là nắng vàng nha!",
  "Không có gì sai khi bạn nghỉ ngơi – pin đầy thì mới cháy tiếp được.",
  "Bạn là người duy nhất trên thế giới có thể sống trọn vẹn cuộc đời của mình.",
  "Khi bạn ngừng so sánh, bạn bắt đầu tỏa sáng.",
  "Bạn không đơn độc đâu – cảm xúc của bạn luôn có chỗ trong thế giới này.",
  "Bạn đã làm rất tốt rồi – kể cả khi người khác không thấy.",
  "Mỗi ngày tỉnh dậy là một cơ hội để viết tiếp câu chuyện tuyệt vời của bạn.",
  "Bạn không cần làm gì lớn lao – chỉ cần tử tế với chính mình là đủ rồi.",
  "Thỉnh thoảng, một chút ngốc nghếch lại là điều dễ thương nhất của bạn.",
  "Bạn không ‘overthinking’, bạn chỉ là người quan tâm đến mọi thứ nhiều hơn.",
  "Dù hôm nay bạn không 'on top', bạn vẫn đang 'on track'.",
  "Bạn là bản hit ngầm – chỉ cần đúng lúc, đúng nơi, là sẽ viral ngay!",
  "Nếu bạn thấy mình bị lạc lối, hãy nhớ: bản đồ nào cũng bắt đầu từ điểm hiện tại.",
  "Bạn không cần phải biết hết mọi thứ – chỉ cần đủ tò mò để tiếp tục học hỏi.",
  "Dù bước đi nhỏ tới đâu, bạn vẫn đang rời xa nơi bạn từng đứng.",
  "Bạn là lý do khiến nơi này ấm áp hơn chút đó.",
  "Chẳng ai như bạn cả – và đó là điều khiến bạn thật sự đáng quý.",
  "Cảm xúc bạn trải qua hôm nay không xấu – nó chỉ là thật.",
  "Mỗi lỗi sai là một bước tiến đến phiên bản tốt hơn.",
  "Bạn không bị trễ – bạn đang nở hoa theo giờ riêng của mình.",
  "Bạn xứng đáng được đối xử dịu dàng – từ cả người khác và chính bạn.",
  "Bạn là ánh đèn dịu dàng trong thế giới nhấp nháy không ngừng này.",
  "Hôm nay bạn có thể im lặng, nhưng điều đó không làm bạn kém quan trọng hơn.",
  "Bạn không cần được chấp nhận bởi tất cả – chỉ cần được tôn trọng bởi chính mình.",
  "Ngay cả khi bạn không biết mình đang làm gì – bạn vẫn đang đi tới.",
  "Hôm nay bạn có thể là đám mây mù – nhưng mưa xong thì trời lại sáng mà.",
  "Không ai có thể tước đi sự tử tế từ bạn – trừ khi bạn tự quên mất nó.",
  "Bạn có thể không phải người giỏi nhất – nhưng bạn là người đang cố gắng nhất.",
  "Bạn không cần 'fit in' – bạn được sinh ra để nổi bật mà!",
  "Bạn là ly nước mát giữa trưa nắng deadline – ai gặp cũng cảm thấy dễ chịu.",
  "Mỗi khi bạn nghi ngờ bản thân, hãy nhìn lại chặng đường đã qua.",
  "Bạn không phải ‘gồng mình’ để được yêu – bạn xứng đáng ngay cả khi yếu đuối.",
  "Bạn không cần 'thành tích' để chứng minh giá trị – chính bạn đã là điều quý giá rồi.",
  "Không cần phải 'ổn' mọi lúc – chỉ cần thành thật là đủ.",
  "Bạn không cần nén cảm xúc – cứ thở ra hết đi, rồi nhẹ lòng hơn.",
  "Thế giới không cần bạn hoàn hảo – thế giới cần bạn thật.",
  "Bạn là cây non đang lớn, không phải máy móc cần hiệu suất liền.",
  "Bạn đủ kiên nhẫn, đủ mạnh mẽ, và đủ yêu thương.",
  "Bạn không cần lúc nào cũng vui vẻ – có hôm trầm là chuyện bình thường.",
  "Bạn không cần chứng minh gì cả – hiện diện là đã đủ rồi.",
  "Bạn không hề 'lười biếng' – bạn đang hồi phục đó chứ.",
  "Bạn là ánh sáng chứ không phải cái bóng của ai khác.",
  "Dù bạn chưa thấy đích đến – hãy cứ đi, rồi sẽ đến.",
  "Bạn là lý do khiến ai đó cảm thấy dễ chịu hơn hôm nay.",
  "Bạn đủ đầy theo cách riêng, đừng cố đong đếm bằng thước người khác.",
  "Hôm nay bạn có thể mệt, nhưng bạn vẫn tiến lên.",
  "Mỗi lần bạn chọn yêu thương thay vì giận dữ, là một lần bạn mạnh mẽ hơn.",
  "Bạn không cần sửa bản thân để vừa vặn với khuôn mẫu nào cả.",
  "Bạn không phải bản nháp – bạn là tác phẩm đang được hoàn thiện.",
  "Bạn đang học cách yêu mình – và đó là hành trình dũng cảm nhất.",
  "Bạn là sự giao thoa tuyệt đẹp giữa sự mềm mại và sức mạnh.",
  "Bạn không cô đơn – ngay cả khi chỉ có một mình.",
  "Bạn là bản giao hưởng đang được viết tiếp, chứ không phải một nốt nhạc lỗi.",
  "Bạn không cần được ai ‘duyệt’ – bạn là chính bạn là đủ rồi.",
  "Bạn không phải là sự trì hoãn – bạn đang đợi đúng thời điểm.",
  "Bạn không trầm – bạn chỉ sâu.",
  "Bạn không cần thêm gì để xứng đáng – bạn đã đủ rồi.",
  "Đôi khi, chỉ cần bạn dậy khỏi giường cũng là một chiến thắng lớn rồi!",
  "Dù cả thế giới đang chạy, bạn được quyền... đi bộ.",
  "Bạn là ánh sao trong đêm – nhỏ nhưng lấp lánh dai dẳng.",
  "Bạn không yếu – bạn đang học cách mềm mại mà không vỡ.",
  "Bạn không cần destination – bạn đang sống trong hành trình.",
  "Bạn là chương truyện mà ai đọc cũng thấy ấm lòng.",
  "Bạn không bỏ cuộc – bạn chỉ đang thở một chút rồi tiếp tục.",
  "Không ai khác có thể mang lại điều bạn mang lại – bạn là duy nhất.",
  "Bạn không cần luôn 'có lý' – có cảm xúc là đủ rồi.",
  "Bạn đang làm tốt lắm – kể cả khi không ai nói điều đó ra.",
  "Bạn là điều dễ thương nhất mà hôm nay mình được thấy đó nha!",
  "Bạn không đi nhanh – nhưng bạn luôn đến được nơi mình cần đến.",
  "Nếu cuộc đời là một bản nhạc – bạn là nốt lặng tuyệt đẹp nhất.",
  "Cả khi bạn không thấy gì tiến triển – bạn vẫn đang thay đổi từ bên trong.",
  "Bạn không đơn độc đâu – có mình đồng hành với bạn đây nè 💛.",
  "Bạn không cần lí do để đáng yêu – bạn vốn đã thế rồi!",
  "Có bạn trên đời – là thế giới lời ca thêm dịu dàng.",
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
