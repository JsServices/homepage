# WaveJS
## IMPORTANT
WaveJS is not currently production nor development ready, please do not use it unless you're fine with adding extra code to your project

## What is WaveJS?
WaveJS is a lightweight Web framework to create interactive sites eaisly and without much trouble

## Syntax
WaveJS uses a syntax similar to React JSX
### Syntax Example
```tsx
@WJSPage({
	title: "My WaveJS Site",
	route: "/",
})
class MyWaveSite extends WJSApp {
	render() {
		return (
			<>
				<h2>Welcome to WaveJS</h2>
			</>
		);
	}
}

// Same as above
const MyFunction = () => {
	return (
		<>
			<h2>Welcome to WaveJS</h2>
		</>
	);
};
WJS.page({ title: "My WaveJS Site", route: "/" }, MyFunction);
```

## Setup
All you need to do for a WaveJS app once dependencies are added is add this following line: `<div id="app"></div>`!
Once you have done that WaveJS will automatically add the content inside the div

## FAQ
### How does WaveJS compare to frameworks like react, vue, and svelte?
WaveJS lacks features that other frameworks offer but tried to make up for it with the size, 
WaveJS is < 10 KiB compared to other frameworks which offer more features

### How do I do routing with WaveJS?
WaveJS currently doesn't have any built in routing. You can use your own routing system or wait for the offical router