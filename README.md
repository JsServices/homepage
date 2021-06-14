# Homepage

Here at Wave Studios we love open source, so thats why we made our website open source! Feel free to make feature requests, bug reports, or pull requests. Just keep these in mind:

- We use tailwindcss, so please don't use any normal css unless its required. If your making a button or want to style something across the website, use `@apply`
- When creating a new file, make sure it has the `.tsx` extension and you don't use react components (see example below)

✔️

```js
export default function test(props) {
    const [profileOpen, setProfileOpen] = useState(true);
    return (
        <>
            {/*Code Here*/}
        </>
    )
}
```

❌

```js
export default class StaffCore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileOpen: false,
        }
    }
    render() {
        <>
            {/*Code Here*/}
        </>
    }
}
```

There are a few minor differances, the most obvious at a glance being state management.
