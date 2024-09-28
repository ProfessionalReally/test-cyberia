import classes from './GalleryProject.module.css'
import Project from "./Project/Project";

const imgs = [
    'https://api.test.cyberia.studio/storage/2024/05/01/7a0e7f6cae809a77fb4ef39281ac50e47b399a4f.png',
    'https://api.test.cyberia.studio/storage/2024/05/01/2ccf85c53f7ac606de4a2b53ace0cb3431b18c11.png',
    'https://api.test.cyberia.studio/storage/2024/05/01/7a8d1e9c83bdf6f7f81bac0d8d1d29d38a62ca55.png',
    'https://api.test.cyberia.studio/storage/2024/05/01/d48c1705f17969a76bbbc2945e8b82a396a7b8c4.png',
    'https://api.test.cyberia.studio/storage/2024/05/01/3c779b54cf9cbe91474aeb0dc2c918213d5a194a.png',
    'https://api.test.cyberia.studio/storage/2024/05/01/0da272fb3427d9f040ccc6c2d2dc673114bcd5ef.png'
]

const titles = [
    'Foodzo',
    'Interior Agency',
    'The one',
    'Flowers Store',
    'Sweater',
    'Газпром'
]

function GalleryProject() {
    return (
        <div className={classes.gallery_project}>
            <Project imageLink={imgs[0]} title={titles[0]}/>
            <Project imageLink={imgs[1]} title={titles[1]}/>
            <Project imageLink={imgs[2]} title={titles[2]}/>
            <Project imageLink={imgs[3]} title={titles[3]}/>
            <Project imageLink={imgs[4]} title={titles[4]}/>
            <Project imageLink={imgs[5]} title={titles[5]}/>
        </div>
    );
}

export default GalleryProject;
