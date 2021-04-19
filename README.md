## Overview

## Time: ~3hrs

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

TODO: Add screenshot here! Use Chrome Dev Tools ctrl+shift+p screenshot full page. Or more preferably use screenshot.rocks

[Solution](TODO: Solution)

[Live](https://fm-2-fylo-data-storage-component.pages.dev/)

![preview](/screenshot.jpeg)

## Built with

- Svelte Kit + static adapter
- Tailwind CSS (JIT mode)
- Cloudflare pages

### What I learned

- I find it intriguing that I didn't have to adjust any of the markup moving to desktop dimensions. Though it might have been better if I did.
- Recalled some stuff from my notes. Especially the tooltip. I rotated the corner of it 90degs and it... just worked, surprisingly. Also reviewed background properties and recalled that the shorthand is bad practice if you plan to override any of its individual properties later (which is likely, and happened here).
- Interestingly, I realized that when you begin styling desktop dimensions, styling from the inside-out (bottom-up) is significantly easier than top-down. After that realization, things proceeded very very quickly, and I plan to apply this process to components, too.

### Continued development

- I definitely struggled with the background position. The key was as simple as creating another container, but I couldn't see it until I walked away for a while. Add more markup instead of simply styling the `main` element. I realized I have a bad habit that makes me avoid adding markup because I feel unnecessary markup could clutter up stuff, but instead I end up adding insufficient markup. I'll make an effort to be more loose about this, because I would've been done much faster if I was.
  - In fact, I even considered skipping that part at the end. But I came back to it, as it seemed pretty straightforward, and I realized it was even simpler to correct than I was making it out to be because Tailwind doesn't care about your HTML tag, just where you attach your classes. So I quickly made some changes to the markup and most of the styles were the same (even though I changed some divs to buttons), it was done without any fanfare.
- I'm very happy with Tailwind and it's my favorite styling solution at the moment. It also combines very nicely with Svelte's styles, which allows me to easily define custom styles where Tailwind might be too verbose or inflexible. It already speeds up my styling so much (especially with JIT & Vite's unbundler), so I'm definitely making plans to practice more with it and speed up my workflow even more!

### Useful resources

- [CSS In-Depth v2](https://frontendmasters.com/courses/css-in-depth-v2/) - I reviewed my notes and remembered this covered background properties (the bad practice of the shorthand) and the tooltip with :after pseudo-elements. Many of the slides were very helpful as a quick cheat-sheet, and there were some good examples that allowed me to quickly arrive at my solution, even if they required some tweaking.
