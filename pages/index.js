// import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
// import Head from 'next/head'

export default function Home() {
    return (
        <div className="screen">
            <header>
                <section className="media-nav">
                    <a href="#" className="active">Games</a>
                    <a href="#">Media</a>
                </section>
                <section className="settings">
                    <span className="icon">
                        <i className="fa fa-search"></i>
                    </span>
                    <span className="icon">
                        <i className="fa fa-cog"></i>
                    </span>
                    <span className="icon">
                        <img className="user" src="https://randomuser.me/api/portraits/women/44.jpg"></img>
                    </span>
                    <span className="time">08:06 PM</span>
                </section>
            </header>
            <div className='container'>
                <section className='game-nav'>
                    <div className="game active">
                        <i className="fa fa-location-arrow"></i>
                    </div>
                    <div className="game">
                        <div
                            className="img"
                            style={{
                                background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                transform: "scale(1.5)"

                            }}
                        />
                    </div>
                    <div className="game">
                        <div
                            className="img"
                            style={{
                                background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVK_kV-zjcnwngmg7Uz34Dab1-yLSBpJwYw&usqp=CAU')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                transform: "scale(1.5)"

                            }}
                        />
                    </div>
                    <div className="game">
                        <div
                            className="img"
                            style={{
                                background: "url('https://i.pinimg.com/236x/8e/59/8d/8e598d7064fa5a05f7556dd0268c799e.jpg')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                transform: "scale(1.5)"

                            }}
                        />
                    </div>
                    <div className="game">
                        <div
                            className="img"
                            style={{
                                background: "url('https://cdn.vox-cdn.com/thumbor/fJrI83McIlst4IMw6fkRiH_kBes=/0x0:6921x4052/1120x0/filters:focal(0x0:6921x4052):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13391571/KDA.jpg')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                transform: "scale(1.5)"

                            }}
                        />
                    </div>
                    <div className="game">
                        <div
                            className="img"
                            style={{
                                background: "url('https://cdn.vox-cdn.com/thumbor/kZ1dOlVnFJB_CP3e0pTdZla-9Yg=/0x0:2000x1125/1120x0/filters:focal(0x0:2000x1125):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13630874/rainbow_six.jpg')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                transform: "scale(1.5)"

                            }}
                        />
                    </div>
                    <div className="game">
                        <div
                            className="img"
                            style={{
                                background: "url('https://cdn.vox-cdn.com/thumbor/hkVpvZFq3DQYQZZLNBQO2kpW3iQ=/0x0:3840x2160/1120x0/filters:focal(0x0:3840x2160):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13630880/black_ops_4_blackout.jpg')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                transform: "scale(1.5)"

                            }}
                        />
                    </div>
                    <div className="game">
                        <div
                            className="img"
                            style={{
                                background: "url('https://cdn.vox-cdn.com/thumbor/7juDDtNFkUWwuQyE3w0J3wkKSWA=/0x0:1374x700/1120x0/filters:focal(0x0:1374x700):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13630900/1312380961_preview_cover.jpg')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                transform: "scale(1.5)"

                            }}
                        />
                    </div>
                </section>
                <section className="info">
                    <span className="subtitle">
                        Official from Playstation | 11/21/2021
                    </span>
                    <h1>Ready for a PS5 Adventure</h1>
                    <p>
                        ASTRO's PLAYROOM is pre-loaded and waiting for you!
                        explore the new capabilities of PS5 and feel the world..
                    </p>
                </section>
            </div>
            <section id="video-trailers">
                <div className="trailer">
                    <img
                        className="image"
                        src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Grand Theft Auto 6</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/OBruT5CateXk4v5lM-DHSlVCINg=/0x0:1925x798/1120x0/filters:focal(0x0:1925x798):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/2438706/Screen_Shot_2014-11-07_at_2.35.08_PM.0.png"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Overwatch</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/xiB5k7xpsH_u7K4Q2cA3NmqwwbQ=/0x0:1152x648/1120x0/filters:focal(0x0:1152x648):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13606066/DtvAMDsXQAE9sXh.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Fortnite</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/3K0UUXgSFEIm2TcqX8ljQWJHHxQ=/0x0:3840x2160/1120x0/filters:focal(0x0:3840x2160):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13200189/edecbd5e_4a92_4811_8a84_0fdc6e4baae3.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Forza Horizon 4</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/frTotGerJdo1wfQYQWhnM-8DroU=/0x0:1280x720/1120x0/filters:focal(0x0:1280x720):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13630891/warthunder.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">War Thunder</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/8zEF67NugcwnDvvZWTDzuOAOTcE=/0x0:1920x1080/1120x0/filters:focal(0x0:1920x1080):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13630887/arma3_apex_screenshot_02.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Arma III: Apex</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/B010C9aXECd7B1mChLoIC9s5qpk=/0x0:1080x600/1120x0/filters:focal(0x0:1080x600):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13630886/gang_beasts.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Gang Beasts</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/hMyhzfmdxYKCrSsXAvNTuw8iy6I=/0x0:1200x630/1120x0/filters:focal(0x0:1200x630):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13631634/index_hero_og.088fb7996b03.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Minecraft</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/fJrI83McIlst4IMw6fkRiH_kBes=/0x0:6921x4052/1120x0/filters:focal(0x0:6921x4052):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13391571/KDA.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">League of Legends</span>
                    </div>
                </div>
                <div className="trailer">
                    <img
                        className="image"
                        src="https://cdn.vox-cdn.com/thumbor/hkVpvZFq3DQYQZZLNBQO2kpW3iQ=/0x0:3840x2160/1120x0/filters:focal(0x0:3840x2160):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13630880/black_ops_4_blackout.jpg"
                    />
                    <div className="video-info">
                        <div className="circle-player">
                            <i className="fa fa-play"></i>
                        </div>
                        <span className="title">Call of Duty: Black OPS 4</span>
                    </div>
                </div>
            </section>
        </div>
    )
}