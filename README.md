# External ideas

[Fancy sidebar navigation](https://codepen.io/djdabe/pen/qXgJNV)
[Reveal Card Content on Hover](https://codepen.io/markmead/pen/MqmOVB)

https://m2.material.io/design
https://fonts.google.com/icons

# Fontawesome

Maybe we should do font awesome locally
```
<head>
  <!-- our project just needs Font Awesome Solid + Brands -->
	<link rel="stylesheet" href="assets/fontawesome-free-6.6.0-web/css/fontawesome.css">
  <link rel="stylesheet" href="assets/fontawesome-free-6.6.0-web/css/brands.css">
  <link rel="stylesheet" href="assets/fontawesome-free-6.6.0-web/css/solid.css">
</head>
```


			<div class="fav">
				<a href="https://www.facebook.com/cantusportugueses" class="fa-brands fa-facebook"></a>
				<a href="https://www.instagram.com/cantusportugueses/?hl=en" class="fa-brands fa-instagram"></a>
				<a href="https://www.youtube.com/@cantusportugueses344" class="fa-brands fa-youtube"></a>
			</div>
      </nav>
</body>
```

# Bugs

This code creates an overshooting after clinking links to the sections on the sidebar. Probably due to the transitions in the CSS

View commit 88798bd6
```
   // Close sidebar when any link inside it is clicked
    $('.side_link').click(function () {
      if ($('#wrapper').hasClass('toggled')) {
          $('#wrapper').removeClass('toggled');
      }
      hamburger_cross();
  });
```