https://v3.tailwindcss.com/docs/guides/vite

for these project we have copied assets, index.css, eslint.config, tailwind.config

project github: https://github.com/adrianhajdin/nike_landing_page

youtube: https://www.youtube.com/watch?v=tS7upsfuxmo&list=PL-87uB0kwPyQFyvkCNNMM--GgVBTAsAtU&index=31

1. we created skeleton of full website with responsive paddings
2. create a folder named sections. create jsx of each component and add rafce to create quick functions and one index.js to import all of it.

3. now we can write jsx code then we can add styling make it section wise and component wise for modularity

Note: if u want to import something from folder like popular card component use
import PopularProductCard from "../components/PopularProductCard"

but if u have index.js for component folder u can simply
import {PopularProductCard} from "../components"

Approach is always from small screen to big so in deafult evrything will be applicable to smaller sizes but if u apply sm,xl then from that point ur new value will be applied