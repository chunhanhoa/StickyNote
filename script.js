// Danh sách lời cổ vũ tích cực
const affirmations = [
  "Không sao đâu, mệt thì nghỉ một chút rồi làm tiếp cũng được.",
  "Tớ biết cậu đã cố gắng rất nhiều rồi, đừng tự áp lực nữa nhé.",
  "Hôm nay có thể không tốt, nhưng cậu vẫn ở đây, vậy là đủ giỏi rồi.",
  "Không cần phải giỏi nhất, chỉ cần vẫn là chính mình là được.",
  "Có những ngày chỉ cần thức dậy thôi cũng là thành tựu rồi.",
  "Chẳng ai mạnh mẽ mãi được đâu, mệt thì dựa vào ai đó cũng được mà.",
  "Nếu thấy lòng rối quá, cứ ngồi yên một chút, thở thôi cũng được.",
  "Tớ không mong cậu hoàn hảo, tớ chỉ mong cậu bình an.",
  "Nhiều khi chỉ cần một cái ôm là đủ để nhẹ lòng.",
  "Thật ra cậu đâu cần phải vội – mỗi người có một hành trình riêng mà.",
  "Không phải lúc nào cũng phải gồng lên tỏ ra ổn đâu.",
  "Có thể không ai thấy, nhưng tớ thấy cậu kiên cường lắm đấy.",
  "Cuộc sống này có quyền làm khó cậu, nhưng cậu cũng có quyền buông bỏ một chút.",
  "Tớ hy vọng hôm nay cậu có thể cười thật lòng, dù chỉ là một lần.",
  "Cậu đã vượt qua bao nhiêu chuyện rồi, đừng quên điều đó.",
  "Chỉ cần đi tiếp, chậm cũng được, đừng quay lại là được.",
  "Tớ ở đây nếu cậu cần – dù là một lời nhắn hay một lần im lặng cùng nhau.",
  "Không ai có quyền phán xét cách cậu cảm thấy cả.",
  "Có thể không ai hiểu, nhưng tớ tin cảm xúc của cậu là thật và đáng được trân trọng.",
  "Hôm nay đừng trách mình nữa, cậu đã làm tốt lắm rồi.",
  "Không cần phải có câu trả lời ngay đâu – cứ sống thôi.",
  "Mỗi ngày là một cơ hội để yêu lấy chính mình thêm một chút.",
  "Tớ không mong cậu luôn mạnh mẽ, tớ mong cậu luôn thật với mình.",
  "Có thể cậu không nhận ra, nhưng sự hiện diện của cậu làm thế giới này ấm áp hơn.",
  "Tớ tin là rồi mọi chuyện cũng sẽ ổn, chỉ cần đừng từ bỏ chính mình.",
  "Cậu xứng đáng với sự tử tế – từ người khác và từ chính cậu nữa.",
  "Không cần lúc nào cũng vui vẻ, miễn là cậu đừng bỏ cuộc.",
  "Chỉ cần là cậu – dù rối bời hay bình yên – tớ vẫn thương.",
  "Tớ không cần cậu phải giỏi, tớ chỉ muốn cậu thấy nhẹ lòng hơn một chút.",
  "Cậu có thể khóc, có thể buồn – và vẫn là một người đáng yêu như thường.",
  "Có những ngày chỉ cần ngồi cùng nhau, không nói gì, cũng đã là chữa lành rồi.",
  "Tớ hiểu, có những ngày chẳng muốn làm gì cả – và như thế cũng không sao.",
  "Tớ mong cậu tha thứ cho chính mình vì những lần không hoàn hảo.",
  "Đôi khi điều tốt nhất cậu có thể làm là cho mình một chút yên lặng.",
  "Không ai cần cậu phải ổn mọi lúc – cậu cũng cần được yếu mềm nữa chứ.",
  "Tớ không biết hết mọi thứ, nhưng tớ biết là cậu đáng được yêu thương.",
  "Cậu không một mình đâu – luôn có ai đó âm thầm đứng về phía cậu.",
  "Tớ mong cậu biết rằng cậu đã đủ, từ rất lâu rồi.",
  "Có thể cậu không thấy rõ, nhưng cậu đang đi đúng hướng.",
  "Đôi khi một tách trà nóng và vài dòng nhắn chân thành là tất cả những gì ta cần.",
  "Cậu không cần chạy – chỉ cần bước tiếp.",
  "Cậu đáng được tự hào về những gì mình đã vượt qua.",
  "Tớ mong hôm nay cậu có thể tha thứ cho chính mình một lần.",
  "Cậu không phải là gánh nặng – cảm xúc của cậu cũng không.",
  "Nếu thấy tim mệt, cứ thả trôi một hôm – rồi mai hẵng tính.",
  "Thật ra, chỉ cần cậu còn sống, là đã là phép màu rồi.",
  "Không cần phải lý trí suốt – đôi khi cảm xúc cũng cần được lên tiếng.",
  "Tớ mong hôm nay trời dịu với cậu, và lòng cậu cũng dịu với chính mình.",
  "Có những điều cậu làm được mà chính cậu còn không nhận ra.",
  "Tớ không mong cậu phải vui ngay – chỉ cần cậu đừng tắt nụ cười mãi mãi.",
  "Cậu có thể im lặng, nhưng xin đừng giấu lòng mình mãi.",
  "Không sao đâu, hôm nay chậm một chút cũng được mà.",
  "Tớ biết cậu đang cố – và như vậy là đủ rồi.",
  "Mỗi người đều có giới hạn – cậu cũng nên tôn trọng của mình.",
  "Cậu không phải là thất bại – cậu là một người đang cố gắng sống tốt.",
  "Tớ ở đây, không phải để giúp cậu mạnh hơn, mà là để cho cậu một chỗ để mệt.",
  "Cậu không lười – chỉ là cần thêm một chút thời gian để lành lại.",
  "Có thể cậu thấy mình bình thường, nhưng với ai đó, cậu là lý do họ tiếp tục.",
  "Tớ mong một ngày cậu nhìn mình bằng đôi mắt dịu dàng hơn.",
  "Không có ai sinh ra để giỏi chịu đựng mãi – cậu cũng nên được yêu chiều chứ.",
  "Tớ mong những ngày sắp tới dịu dàng hơn một chút, và lòng cậu cũng vậy.",
  "Đừng xấu hổ vì mình yếu đuối – vì chính điều đó làm cậu thật người.",
  "Chỉ cần ở đây – là đã đủ dũng cảm lắm rồi.",
  "Cậu có thể ngã – chỉ cần không nản lòng là được.",
  "Tớ biết cậu đang phải gồng lên – tớ mong cậu được thả lỏng một chút thôi.",
  "Dù mọi thứ đang rối tung, vẫn có một góc trời đang chờ cậu yên ổn lại.",
  "Tớ tin là những điều tốt đẹp vẫn đang tìm cách đến với cậu.",
  "Không ai nên phải 'một mình vượt qua hết' cả – cậu không cần thế đâu.",
  "Có thể chẳng ai nói ra, nhưng cậu đã làm rất tốt rồi.",
  "Nếu thấy kiệt sức, cứ cho phép mình không làm gì hôm nay cũng được.",
  "Tớ không hứa mọi thứ sẽ dễ dàng – nhưng tớ hứa là cậu không đơn độc.",
  "Tớ mong cậu có thể tha thứ cho những mong đợi quá khắt khe từ chính mình.",
  "Cậu không cần lúc nào cũng biết mình đang làm gì – đôi khi đi lạc cũng đáng giá.",
  "Tớ chỉ muốn nhắc nhẹ rằng: cậu vẫn đang là một điều rất đẹp trong thế giới này.",
  "Nếu không biết nên làm gì tiếp theo, hãy chọn điều khiến cậu thấy nhẹ lòng nhất.",
  "Tớ hy vọng một ngày nào đó cậu sẽ thấy mình bằng tất cả sự dịu dàng mà cậu đáng có.",
  "Không cần phải cố gắng trở thành ai cả – là cậu đã đủ tuyệt vời rồi.",
  "Tớ mong mỗi giấc ngủ của cậu đều yên và mỗi lần thức dậy đều có một chút hi vọng.",
  "Cậu không phải sửa mình để được yêu – tình yêu thật sự không đòi hỏi điều đó.",
  "Có thể hôm nay chẳng có gì đặc biệt – nhưng cậu vẫn xứng đáng được yêu thương như mọi ngày.",
  "Cứ sống thôi, chẳng cần phải rực rỡ – miễn là thật lòng.",
  "Tớ biết mọi chuyện có lúc mơ hồ – nhưng cậu vẫn đang đi đúng hướng.",
  "Cậu không cần phải 'ổn' mới được người khác quan tâm đâu.",
  "Có đôi khi chỉ cần ngồi nghe mưa, rồi tự thấy lòng mình nhẹ lại.",
  "Đừng vì một vài ngày tệ mà quên đi những ngày cậu đã rất dũng cảm.",
  "Tớ không mong cậu hết buồn ngay – tớ mong cậu biết: được buồn cũng là một quyền.",
  "Tớ luôn tin là sau mỗi điều mỏi mệt sẽ có một điều dịu dàng chờ cậu ở phía sau.",
  "Nếu một ngày không còn động lực, hãy nghĩ đến điều khiến cậu bắt đầu.",
  "Tớ mong dù không ai nói gì, thì cậu vẫn biết mình quan trọng với ai đó.",
  "Không cần chạy đua – cậu vẫn đang sống, và thế là quá đủ rồi.",
  "Chỉ cần cậu còn thở, thì mọi thứ vẫn có thể thay đổi mà.",
  "Tớ mong có những ngày lòng cậu được yên – không vì điều gì cả, chỉ vì xứng đáng.",
  "Không ai biết hết điều cậu đã trải qua – nên tớ tin cậu giỏi hơn cậu nghĩ nhiều.",
  "Chậm một chút cũng không sao, miễn là còn đi.",
  "Thở sâu, rồi làm lại từ đầu cũng được mà.",
  "Mọi chuyện rồi cũng sẽ ổn – theo cách nào đó.",
  "Một ngày tệ không có nghĩa là một cuộc đời tệ.",
  "Không phải lúc nào cũng phải mạnh mẽ đâu.",
  "Nghỉ ngơi không có nghĩa là bỏ cuộc.",
  "Cảm xúc hôm nay không quyết định giá trị ngày mai.",
  "Từ từ rồi cũng tới, vội quá dễ lạc đường.",
  "Có quyền thấy mệt, nhưng đừng quên hồi phục.",
  "Giữ lấy những điều nhỏ bé khiến lòng nhẹ lại.",
  "Không nhất thiết phải giỏi nhất, chỉ cần đủ tốt.",
  "Im lặng một chút cũng là cách để lắng nghe chính mình.",
  "Khó khăn không kéo dài mãi – nhưng kiên nhẫn thì có thể.",
  "Một tách trà, một bản nhạc, rồi tiếp tục.",
  "Cứ thử lại, thêm một lần nữa thôi.",
  "Mỗi sáng thức dậy là một cơ hội mới.",
  "Hôm nay không cần làm nhiều – chỉ cần hiện diện.",
  "Một bước nhỏ cũng là tiến về phía trước.",
  "Đừng quá nghiêm khắc với bản thân.",
  "Có những lúc không làm gì cũng là đang chữa lành.",
  "Mọi người đều đang học cách sống – không ai hoàn hảo cả.",
  "Có thể chưa ổn, nhưng chắc chắn sẽ ổn.",
  "Không ai hiểu hết mọi thứ – cứ từ từ thôi.",
  "Mỗi cảm xúc đều có lý do để tồn tại.",
  "Điều cần nhất đôi khi chỉ là một giấc ngủ ngon.",
  "Sự thay đổi luôn bắt đầu bằng những điều rất nhỏ.",
  "Không phải lúc nào cũng cần câu trả lời ngay lập tức.",
  "Cứ cho phép mình cảm thấy – rồi sẽ nhẹ hơn.",
  "Tự tử tế với mình hơn một chút mỗi ngày.",
  "Mọi hành trình đều bắt đầu từ những bước đầu vụng về.",
  "Không cần gấp – bình yên đến đúng lúc là được.",
  "Chưa làm được không có nghĩa là sẽ không làm được.",
  "Lùi một bước không phải thất bại – đôi khi là để lấy đà.",
  "Giữ lòng dịu dàng, ngay cả khi thế giới không như ý.",
  "Cuộc sống không phải là đường đua – là chuyến đi.",
  "Nỗi buồn cũng có hạn sử dụng, rồi sẽ hết.",
  "Tập buông bỏ những điều không còn phù hợp.",
  "Không cần vội vàng, mỗi người đều có tiến trình riêng.",
  "Mỗi ngày là một lần thử lại – không sao cả.",
  "Đôi khi chỉ cần một ánh nắng cũng đủ làm dịu lòng.",
  "Có thể hôm nay chưa làm gì, nhưng đã vượt qua rồi đấy.",
  "Bình thường cũng ổn – không cần lúc nào cũng rực rỡ.",
  "Chậm cũng được, miễn là còn muốn đi tiếp.",
  "Một chút lộn xộn không làm cuộc sống tệ đi.",
  "Những lúc không biết phải làm gì, hãy cứ thở.",
  "Hạnh phúc không ở đâu xa – có thể chỉ là hôm nay trôi qua yên bình.",
  "Chỉ cần không từ bỏ, thì vẫn còn hy vọng.",
  "Cứ sống một cách đủ tử tế là đã tốt lắm rồi.",
  "Không cần so sánh – mỗi người một kiểu sống riêng.",
  "Cuộc sống không yêu cầu phải giỏi ngay từ đầu.",
  "Đôi khi chỉ cần một ngày trôi qua bình lặng.",
  "Điều quan trọng không phải là nhanh, mà là kiên trì.",
  "Không sao nếu hôm nay hơi chán – mai có thể khá hơn.",
  "Một ngày trôi qua cũng là một thành tích rồi.",
  "Mỗi người đều đang chiến đấu với điều gì đó – hãy nhẹ tay hơn.",
  "Cứ sống tử tế, dù chỉ là trong suy nghĩ.",
  "Không phải lúc nào cũng cần cố gắng hết sức.",
  "Cứ bình tĩnh – mọi chuyện sẽ sáng ra theo thời gian.",
  "Im lặng không phải yếu đuối – đó là một dạng sức mạnh.",
  "Dễ tổn thương không làm ai đó kém đi.",
  "Không ai đi đúng hướng suốt cả đời – lạc chút cũng không sao.",
  "Thành công không cần vội – quan trọng là đi đúng đường.",
  "Hôm nay buồn, nhưng không phải mãi mãi.",
  "Chỉ cần tiếp tục, kiểu gì cũng tới nơi.",
  "Một ngày không hoàn hảo vẫn có thể là một ngày đẹp.",
  "Đôi khi, mạnh mẽ nhất là khi biết nói 'không'.",
  "Thất bại cũng là một phần của học hỏi.",
  "Không cần làm gì lớn lao – chỉ cần thật lòng.",
  "Cảm xúc nào rồi cũng qua – kể cả những điều tệ nhất.",
  "Sự thay đổi đến từ những điều nhỏ nhất.",
  "Bình yên không phải tìm thấy – là chọn lấy.",
  "Không phải lúc nào cũng hiểu – chỉ cần lắng nghe.",
  "Những điều tốt đẹp thường đến chậm.",
  "Cuộc sống không cần hoàn hảo – chỉ cần thật.",
  "Ngồi yên cũng là một kiểu tiến lên – khi lòng đang rối.",
  "Những ngày tồi tệ rồi sẽ qua – như mọi thứ khác.",
  "Chỉ cần có mặt, là đã đủ dũng cảm rồi.",
  "Không phải chuyện gì cũng cần làm ngay hôm nay.",
  "Không ổn cũng được – miễn là đừng dừng lại.",
  "Đôi khi không cần lời khuyên – chỉ cần được lắng nghe.",
  "Mỗi người đều có ngày riêng để nở hoa.",
  "Làm ít thôi, nhưng làm đều – vẫn sẽ tới nơi.",
  "Không ai phải ổn mọi lúc – cứ sống thật thôi.",
  "Có thể yếu đuối – miễn là không bỏ cuộc.",
  "Lúc nào cần, hãy nghỉ – rồi đi tiếp.",
  "Sự tử tế bắt đầu từ bên trong.",
  "Không cần vội chứng minh điều gì.",
  "Chọn điều khiến lòng an – là đang làm đúng.",
  "Không cần gồng – được là mình là quý lắm rồi.",
  "Mỗi ngày là một lần làm lại – không cần hoàn hảo.",
  "Đôi khi yên lặng là điều chữa lành nhất.",
  "Hạnh phúc đến từ những điều bình thường nhất.",
  "Cứ thử thêm lần nữa – lần này có thể khác đấy.",
  "Không ai quá muộn – chỉ là đang trên nhịp riêng.",
  "Mọi hành trình lớn đều bắt đầu rất nhỏ.",
  "Giữ lấy điều nhẹ nhàng – thế giới đủ ồn rồi.",
  "Lùi lại một bước – để thấy toàn cảnh rõ hơn.",
  "Một ngày yên bình là một món quà.",
  "Không phải lúc nào cũng phải hiểu – chỉ cần tiếp tục đi.",
  "Càng trưởng thành, càng thấy bình thường là điều đáng quý.",
  "Cứ thở, rồi tính tiếp.",
  "Lòng tốt không bao giờ sai thời điểm.",
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
