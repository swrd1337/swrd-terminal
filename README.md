[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">
  <h1>⌨️ swrd-terminal</h1>
  <p align="center"></p>
    A terminal style portfolio website built with <b>React</b>
  </p>
</div>

## Short Demonstration
<div align="center">
  <img src="./doc/demo.webp" alt="Demo">
</div>

## Built With

* [![React][React.js]][React-url]
* [![Vite][Vite]][Vite-url]
* [![Styled Components][Styled-Components]][Styled-Components-url]
* [![Framer][Framer]][Framer-url]


## Installation & Usage

Use the package manager [npm](https://www.npmjs.com/) to install `swrd-terminal`.

```bash
npm install
```

Run application with:
```bash
npx vite --port=<your_port>
```

Deploy on *Vercel*:
1. Install the CLI tool.
```bash
npm install -g vercel
```
2. Run through configuration via the following command.
```bash
vercel
```

## Personalization

To change output data from commands edit the following file (check out `messages` fields):

```bash
 ./src/resources/commands.json
```

To change the main information displayed on the app (e.g.: *description*, *author*, *githubUrl*) check the following file:

```bash
 ./src/resources/mainInfo.json
```

If you want to update theme colors see:

```bash
 ./src/theme.js
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

* [Vercel](https://vercel.com)
* [FiraCode](https://github.com/tonsky/FiraCode)
* [React Icons](https://react-icons.github.io/react-icons)
* [json-loader](https://www.npmjs.com/package/json-loader)

## License

[MIT](./LICENSE)

<!-- Header -->
[contributors-shield]: https://img.shields.io/github/contributors/swrd1337/swrd-terminal.svg?style=for-the-badge
[contributors-url]: https://github.com/swrd1337/swrd-terminal/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/swrd1337/swrd-terminal?style=for-the-badge
[forks-url]: https://github.com/swrd1337/swrd-terminal/network/members

[stars-shield]: https://img.shields.io/github/stars/swrd1337/swrd-terminal.svg?style=for-the-badge
[stars-url]: https://github.com/swrd1337/swrd-terminal/stargazers

[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/alexei-bunazov-921250185

<!-- Build with -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/

[Styled-Components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-Components-url]: https://styled-components.com/

[Framer]: https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue
[Framer-url]: https://www.framer.com/developers/
