# Responsive Testimonials for jQuery

## First steps

Add the following lines to the header:

```html
<link href="responsive-testimonials/css/responsive-testimonials.css" rel="stylesheet">
<script src="responsive-testimonials/js/jquery.min.js"></script>
<script src="responsive-testimonials/js/responsive-testimonials.js"></script>
<script>
    $(document).ready(function () {
        $('.responsive-testimonials').responsiveTestimonials();
    });
</script>
```

## HTML

<p>The plugin provides two main layout modes:</p>

<ul>
    <li>Horizontal</li>
    <li>Vertical</li>
</ul>

### Horizontal

```html
<div class="responsive-testimonials responsive-testimonials--layout-row">
                
    <div class="responsive-testimonials__list">
        <div class="responsive-testimonials__item responsive-testimonials__item--layout-order-2 responsive-testimonials__item--align-aside-center">
            <div class="responsive-testimonials__aside">
                <div class="responsive-testimonials__img-box responsive-testimonials__rounded-full">
                    <img class="responsive-testimonials__img responsive-testimonials__rounded-full" src="responsive-testimonials/img/1.jpg" width="142" height="142" alt="">
                </div>
            </div>
            <div class="responsive-testimonials__content responsive-testimonials__rounded-4">
                <div class="responsive-testimonials__content-body">
                    <div class="responsive-testimonials__title">Susan Doyle</div>
                    <div class="responsive-testimonials__subtitle">Manager at Responsive Testimonials</div>
                    <div class="responsive-testimonials__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </div>
        <div class="responsive-testimonials__item responsive-testimonials__item--layout-order-1 responsive-testimonials__item--align-aside-center">
            <div class="responsive-testimonials__aside">
                <div class="responsive-testimonials__img-box responsive-testimonials__rounded-full">
                    <img class="responsive-testimonials__img responsive-testimonials__rounded-full" src="responsive-testimonials/img/2.jpg" width="142" height="142" alt="">
                </div>
            </div>
            <div class="responsive-testimonials__content responsive-testimonials__rounded-4">
                <div class="responsive-testimonials__content-body">
                    <div class="responsive-testimonials__title">John Smith</div>
                    <div class="responsive-testimonials__subtitle">Administrator</div>
                    <div class="responsive-testimonials__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Vertical

```html
<div class="responsive-testimonials responsive-testimonials--layout-col">
                
    <div class="responsive-testimonials__list">
        <div class="responsive-testimonials__item responsive-testimonials__item--layout-order-1 responsive-testimonials__item--align-aside-center">
            <div class="responsive-testimonials__aside">
                <div class="responsive-testimonials__img-box responsive-testimonials__rounded-full">
                    <img class="responsive-testimonials__img responsive-testimonials__rounded-full" src="responsive-testimonials/img/3.jpg" width="142" height="142" alt="">
                </div>
            </div>
            <div class="responsive-testimonials__content responsive-testimonials__rounded-4">
                <div class="responsive-testimonials__content-body">
                    <div class="responsive-testimonials__title">Johnny Doe</div>
                    <div class="responsive-testimonials__subtitle">Administrative Assistant</div>
                    <div class="responsive-testimonials__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </div>
        <div class="responsive-testimonials__item responsive-testimonials__item--layout-order-1 responsive-testimonials__item--align-aside-center">
            <div class="responsive-testimonials__aside">
                <div class="responsive-testimonials__img-box responsive-testimonials__rounded-full">
                    <img class="responsive-testimonials__img responsive-testimonials__rounded-full" src="responsive-testimonials/img/4.jpg" width="142" height="142" alt="">
                </div>
            </div>
            <div class="responsive-testimonials__content responsive-testimonials__rounded-4">
                <div class="responsive-testimonials__content-body">
                    <div class="responsive-testimonials__title">Sarah Joyce</div>
                    <div class="responsive-testimonials__subtitle">Operative Director</div>
                    <div class="responsive-testimonials__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## CSS

### Default classes

1. `responsive-testimonials`               - This is the main container element of the plugin. It can be call the Responsive Testimonials with it.
2. `responsive-testimonials__list`         - This element contains the items (3). It must be inside the plugin main container (1). One container element (1) could contains one list (2).
3. `responsive-testimonials__item`         - This element contains the container element (4) of image and the container element (7) of the text box. Unlimited quantities can be added to the list (2). 
4. `responsive-testimonials__aside`        - This element contains the image container (5) and the image itself (6).
5. `responsive-testimonials__img-box`      - This is the container element of the image.
6. `responsive-testimonials__img`          - This is the image.
7. `responsive-testimonials__content`      - This element contains the text sections (9, 10, 11) and the container (8) of these elements.
8. `responsive-testimonials__content-body` - This is the container element of text sections (9, 10, 11).
9. `responsive-testimonials__title`        - This is the title (9) of description (11).
10. `responsive-testimonials__subtitle`    -  This is the subtitle (10) of description (11).
11. `responsive-testimonials__desc`        - This is the description.


### Layout and appearance classes


With the following classes you can easily set the layout to horizontal or vertical. It means the positition of the text box related to the photo. Horizontal layout will place the text box next to the photo container, while vertical layout will organize them below each other.


1. `responsive-testimonials--layout-row`<br>
2. `responsive-testimonials--layout-col`
 

Note!
For aesthetic reasons, the horizontal layout (480px) automatically modified to vertical layout to keep the best user experience on mobiles and tablets.

These classes must be extended with them: `responsive-testimonials` (required)

---
 
With the following classes you can align the items horizontally: left (1), center (2) or right (3)

1. `responsive-testimonials__list--align-h-left`
2. `responsive-testimonials__list--align-h-center`
3. `responsive-testimonials__list--align-h-right`

These classes can be extended with them: `responsive-testimonials__list` (optional)

Default: 2.

---

Align the items vertically with the following classes: top (1), center (2), bottom (3), all elements of the same height in the current row (4).

1. `responsive-testimonials__list--align-v-top`
2. `responsive-testimonials__list--align-v-center`
3. `responsive-testimonials__list--align-v-bottom`
4. `responsive-testimonials__list--align-v-stretch`

These classes can be extended with them: `responsive-testimonials__list` (optional)

Default: 4.

---

The following classes are set the order of the text box and the image container related to each other.
 
1. `responsive-testimonials__item--layout-order-1`
2. `responsive-testimonials__item--layout-order-2`

In the first case (1):

- in horizontal layout, the image will be placed to the left and the text box will be placed to the right side
- in vertical layout, the image will be placed at the top and the text box will be placed below

In the second case (2):

- in horizontal layout, the image will be placed to the right and the text box will be placed to the left side
- in vertical layout, the image will be placed at the bottom and the text box will be placed top

These classes must be extended with them: `responsive-testimonials__item` (required)
 
---

The following classes set the position of the photo container element vertically or horizontally: at the begin, center, at the end


1. `responsive-testimonials__item--align-aside-start`
2. `responsive-testimonials__item--align-aside-center`
3. `responsive-testimonials__item--align-aside-end`

These classes can be extended with them: `responsive-testimonials__item` (optional)

---

The following classes set the alignment of the content in the text box horizontally: left (1), center (2), right (3), justify (4).

1. `responsive-testimonials__content--align-h-left`
2. `responsive-testimonials__content--align-h-center`
3. `responsive-testimonials__content--align-h-right`
4. `responsive-testimonials__content--align-h-justify`

These classes can be extended with them: `responsive-testimonials__content` (optional)

Default: 1.
 
---

The following classes set the alignment of the content in the text box vertically: top (1), center (2), bottom (3)

1. `responsive-testimonials__content--align-v-top`
2. `responsive-testimonials__content--align-v-center`
3. `responsive-testimonials__content--align-v-bottom`

These classes can be extended with them: `responsive-testimonials__content` (optional)

Default: 2.
 
---

The following classes set the curves of the elements to be rounded. Scale is defined as 1 to 20.
The number at the end of class names indicates the number of pixel rounds for that item.
There is an exception at the end of which there is no number, but a "full" suffix, which makes a full round (forms of circles of equal width and length).

- `responsive-testimonials__rounded-1`
- `responsive-testimonials__rounded-2`
- `responsive-testimonials__rounded-3`
- `responsive-testimonials__rounded-4`
- `responsive-testimonials__rounded-5`
- `responsive-testimonials__rounded-6`
- `responsive-testimonials__rounded-7`
- `responsive-testimonials__rounded-8`
- `responsive-testimonials__rounded-9`
- `responsive-testimonials__rounded-10`
- `responsive-testimonials__rounded-11`
- `responsive-testimonials__rounded-12`
- `responsive-testimonials__rounded-13`
- `responsive-testimonials__rounded-14`
- `responsive-testimonials__rounded-15`
- `responsive-testimonials__rounded-16`
- `responsive-testimonials__rounded-17`
- `responsive-testimonials__rounded-18`
- `responsive-testimonials__rounded-19`
- `responsive-testimonials__rounded-20`
- `responsive-testimonials__rounded-full`

These classes can be extended with them: `responsive-testimonials__img-box`, `responsive-testimonials__img-box`, `responsive-testimonials__content` (optional)

## Other projects

- [Elegant Age Verification – Responsive age-gate plugin for WordPress](https://1.envato.market/ag5YM)
- [GDPR Cookie Law – Responsive JavaScript GDPR Consent Plugin](https://1.envato.market/qRo6n)
- [GDPR Cookie Law – GDPR Cookie Compliance jQuery Plugin](https://1.envato.market/50vqn)
- [Elegant Elements – jQuery HTML Form Plugin](https://1.envato.market/j695n)
- [AudioJungle – Royalty free sounds](https://audiojungle.net/user/jablonczay/portfolio)
- [Responsive Testimonials for jQuery](https://github.com/jablonczay/responsive-testimonials-for-jquery/)
- [Scroll Styler – Free Wordpress Plugin](https://wordpress.org/plugins/scroll-styler/)
- [Royalty-free Photos](https://www.shutterstock.com/g/jablonczay)

## License – MIT

Copyright 2017 © [jablonczay.com](https://jablonczay.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
