$(function () {
	$('.icon-menu').click(function () {
		$('.icon-menu, .menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.filter__item').click(function (e) {
		e.preventDefault();
		let i = $(this).data('filter');
		if (i == 1) {
			$('.gallery__item').show();
			$('.yes__btn').show();
			$('.n').hide();
		} else {
			$('.gallery__item').hide();
			$('.gallery__item.f_' + i).show();
			$('.yes__btn').hide();
		}
		$('.filter__item').removeClass('active');
		$(this).addClass('active');
		return false;
	});


	$('.yes__btn').click(function (e) {
		e.preventDefault();
		$('.n').slideToggle('display');
		// .toggle()
	});

});
$(function ($) {
	$(".2093").viewportChecker({
		callbackFunction: function () {
			$('.2093').animate({ num: 2093 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});
	$(".9134835").viewportChecker({
		callbackFunction: function () {
			$('.9134835').animate({ num: 9134835 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toLocaleString('ru-RU', { maximumFractionDigits: 0 })
				}
			});
		}
	});
	$(".7143").viewportChecker({
		callbackFunction: function () {
			$('.7143').animate({ num: 7143 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});
	$(".427").viewportChecker({
		callbackFunction: function () {
			$('.427').animate({ num: 427 }, {
				duration: 3000,
				step: function (num) {
					this.innerHTML = (num).toFixed(0)
				}
			});
		}
	});
});



$(document).ready(function () {
	$('.slider__row').slick({
		appendArrows: $('.arrows'),
	});
});


function ibg() {
	document.querySelectorAll(".ibg").forEach(el => {
		if (el.querySelector('img')) {
			el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
		}
	});
}
ibg();



