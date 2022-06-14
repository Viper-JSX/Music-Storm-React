import './App_light.css';

import { useState, useEffect, createContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import appThemes from './various_things/themes';
import users from './various_things/users.js';
import songs from './various_things/songs.js';

import ThemeContext from './context/Theme_context.js';
import UserContext from './context/User_context.js';
import ErrorContext from './context/Error_context';
import Layout from './components/Layout/Layout';
import User from './Classes/User';
import ErrorPopup from './components/Error/Error_popup';


let janres = [
    {name: "All", backgroundImage: require('./Files/Images/Janre_images/all.png')}, 
    {name: "Rock", backgroundImage:  "https://rocknrollmetalart.files.wordpress.com/2015/01/rock-star.jpg"}, 
    {name:"Jazz",backgroundImage: require('./Files/Images/Janre_images/jazz.png')/*"https://m.media-amazon.com/images/I/618MOXldDfL._SS500_.jpg"*/}, 
    {name: "Bluse", backgroundImage: "https://image.shutterstock.com/image-illustration/musician-guitar-performer-blues-jazz-260nw-1209032083.jpg"}, 
    {name: "Hip-Hop", backgroundImage: "https://images.all-free-download.com/images/graphiclarge/hip_hop_theme_vector_154134.jpg"}, 
    {name: "Rap", backgroundImage: require('./Files/Images/Janre_images/rap.png')}, 
    {name: "Clubnyak", backgroundImage: require('./Files/Images/Janre_images/clubnyak.png')}, 
    {name: "Disco", backgroundImage: require('./Files/Images/Janre_images/disco.png')},
    {name: "Rocki", backgroundImage: ""}, 
];

let topics = ["Top 100", "Summer", "For fun", "Relax", "For peace"];

let about = {
    copyright: "By Yura Shtefanko",
    author: "Yura Shtefanko",
    year: 2008,
    description: "No illegal copy allowded"
}

let news = [
    {
        title: "New hit",
        text: "A new world hit has been released yesterday at 20:00"
    },
    {
        title: "New hit",
        text: "A new world hit has been released yesterday at 20:00"
    },
    {
        title: "New hit",
        text: "A new world hit has been released yesterday at 20:00"
    }
];

function getElementCoords(element){
    const box = element.getBoundingClientRect();
    console.log(box.top)
}

function App(){
    let playerRef = useRef(null);
    const navigate = useNavigate();

    const [user, setUser] = useState(() => 
        localStorage.getItem("user") ? 
        JSON.parse(localStorage.getItem("user"))
        :
        null
    );

    const [forceUpdateState, setForceUpdateState] = useState({});
    const [songsToDisplay, setSongsToDisplay] = useState(songs.slice(0, 10));
    
    const [theme, setTheme] = useState(appThemes.light);
    const [playingSong, setPlayingSong] = useState({});
    const [displayJanresRange, setDisplayJanresRange] = useState({l: 0, h: 7});

    const [homePageHasBeenScrolled, sethomePageHasBeenScrolled] = useState(false);
    const [janresListIsVisible, setJanresListIsvisible] = useState(false);

    const [ currentAppError, setCurrentAppError ] = useState({ errorText: "" });

    /*---App-start*---*/
    document.body.onscroll = !homePageHasBeenScrolled ? handleBodyScroll : null; //To get rid of event when all animations have fired
    /*--------------*/


    function handleBodyScroll(event){
        if(window.location.pathname != "/" && window.location.pathname != ""){ //THe user is not on main page
            return;
        }
        const introductionSection = document.getElementById("introductionSection");
        const introductionSectionText = document.querySelector("#introductionSectionText");
        const introductionSectionImage = document.querySelector("#introductionSectionImage");

        const aboutUsSection = document.getElementById("aboutUsSection");
        const aboutUsSectionParagraphs = aboutUsSection.querySelector(".paragraphs");
        const aboutUsSectionParagraphBookmarks = aboutUsSectionParagraphs.querySelectorAll(".paragraphBookmark");
        const aboutUsSectionSideImage = aboutUsSection.querySelector("#aboutUsSectionSideImage");


        const introductionSectionYPosition = getElementCoords(introductionSection);
        const aboutUsSectionPosition = 0;
        
        const introductionSectionBox = introductionSection.getBoundingClientRect();
        const aboutUsSectionBox = aboutUsSection.getBoundingClientRect();

        console.log(introductionSectionBox.top - introductionSectionBox.height/4);

        if(introductionSectionBox.top - introductionSectionBox.height / 4 <= 0){
            introductionSectionImage.classList.remove("hidden");
            introductionSectionImage.classList.add("visible");
            
            introductionSectionText.classList.remove("hidden");
            introductionSectionText.classList.add("visible");
        }

        if(aboutUsSectionBox.top - aboutUsSectionBox.height / 4 <= 0){
            aboutUsSectionSideImage.classList.remove("hidden");
            aboutUsSectionSideImage.classList.add("visible");
            //console.log("hide")

            aboutUsSectionParagraphs.classList.remove("hidden");
            aboutUsSectionParagraphs.classList.add("visible");

            aboutUsSectionParagraphBookmarks.forEach((bookMark) => {
                bookMark.classList.remove("hidden");
                bookMark.classList.add("visible");
            })
            sethomePageHasBeenScrolled(true);
        }

        if(window.scrollY >= 900/*aboutUsSectionParagraphs.clientTop + 100*/){
            
        }
    }

    function handleJanresListToggle(){
        setJanresListIsvisible((prev) => !prev);
    }

    function handleJanresListHide(){
        setJanresListIsvisible(false);
    }


    function handlePlay(song){
       for(let i = 0; i < songs.length; i++){
            if(songs[i].src == song.src){
                songs[i].isPlaying = !songs[i].isPlaying;
                setPlayingSong({...songs[i]})
            }
            else{
                songs[i].playProgress = 0;
                songs[i].isPlaying = false;
            }
        }

        if((song.src) && playingSong.src != song.src){
            setPlayingSong({...song});
            playerRef.current.load();
        }

        if(playerRef.current.paused){
            setTimeout(function(){
                playerRef.current.play();
            }, 30)
        }
        else{
            playerRef.current.pause();
        }

        if(user){
            setUser((prevUser) => {
                user.addJanreToListened(song.janre);

                return user;
            });
        }
    }

    function handleControlPlay(){
        for(let i = 0; i < songs.length; i++){
            if(songs[i].src == playerRef.current.src){
                songs[i].isPlaying = !songs[i].isPlaying;
                setPlayingSong({...songs[i]})
            }
        }

        if(playerRef.current.paused){
            playerRef.current.play()
        }
        else{
           playerRef.current.pause(); 
        }
    }


    function handleDurationChange(event){
        let clickedProgress = (event.pageX - event.target.getBoundingClientRect().left) / event.currentTarget.offsetWidth;
        if(!(clickedProgress * playerRef.current.duration)) return;
        playerRef.current.currentTime = clickedProgress * playerRef.current.duration;
    }

    function handleVolumeChange(event){
        let volumeWrapperWidth = event.target.offsetWidth;
        let clickPosition = event.pageX - event.target.offsetLeft;
        let clickedProgress = clickPosition / volumeWrapperWidth;

        playerRef.current.volume = clickedProgress;
        document.getElementById("playerVolumeBar").style.width = `${clickedProgress * 100}%`;
        document.getElementById("volumeBarPercentIndicator").textContent = `${clickedProgress * 100}%`;

        event.target.onmousemove = function(anEvent){
            clickPosition = anEvent.pageX - anEvent.target.offsetLeft;
            clickedProgress = clickPosition / volumeWrapperWidth; /// anEvent.target.offsetWidth;
            playerRef.current.volume = clickedProgress;            
            
            document.getElementById("playerVolumeBar").style.width = `${Math.round(clickedProgress * 100)}%`;
            document.getElementById("volumeBarPercentIndicator").textContent = `${Math.round(clickedProgress * 100)}%`;
            //console.log(clickedProgress)
        }

        event.target.onmouseup = function(anEvent){
            anEvent.target.onmousemove = null;
        }

    }

    function handleVolumeDrag(event){
    }

    function handleVolumeRelease(){

    }

    function handleSearch(event){     
        console.log("Search")   
        let searchTerm = event.target.value.toLowerCase();
        let newList = songs.filter((song) => {
            return song.name.toLowerCase().indexOf(searchTerm) >= 0;
        })

        setSongsToDisplay(newList);
    }

    function handleTagChange(topic){
        let newList = songs.filter((song) => {
            for(let i = 0; i < song.tags.length; i++){
                if(song.tags[i].toLowerCase() == topic.toLowerCase()){
                    return 1 > 0;
                    break;
                }
            }
        })

        setSongsToDisplay(newList);
    }

    function handleJanreChange(janre){
        if(janre.name.toLowerCase() == "all"){
            setSongsToDisplay(songs);
            return;
        }

        let newList = songs.filter((song) => {
            return song.janre.toLowerCase() == janre.name.toLowerCase();
        })

        setSongsToDisplay(newList)
    }

    function handleThemeChange(themeSwitchSliderRef){
        //let newTheme = event.target.checked ? appThemes.dark : appThemes.light;
        //setTheme(newTheme);
        if(theme.name == "light"){
            console.log("Switching to dark");
            setTheme(appThemes.dark);
            themeSwitchSliderRef.current.style.marginLeft = "50%";
        }
        else if(theme.name == "dark"){
            console.log("Switching to light");
            setTheme(appThemes.light);
            themeSwitchSliderRef.current.style.marginLeft = "0";
        }

        console.log(appThemes)

        //if(event.target.checked){
        //    document.getElementById("cssStyles").href = "App_dark.css";
        //}
        //else{
        //    document.getElementById("cssStyles").href = "App_light.css";
        //}
    }

    function handleDurationProgress(event){
        let progressBar = (event.target.currentTime / event.target.duration) * 100;

        if(event.target.currentTime == event.target.duration){
            setPlayingSong(
                {
                    ...playingSong,
                    isPlaying: false
                }
            )
            for(let i = 0; i < songs.length; i++){
                if(songs[i].name == playingSong.name){
                    songs[i].isPlaying = false;
                    break;
                }
            }
            return;
        }

        setPlayingSong(
            {
                ...playingSong,
                playProgress: event.target.currentTime,
                progressBar: progressBar
            }
        )
            //Requires optimization (runs each 0.3s)

        if(user){
            setUser((prevUser) => {
                prevUser.addListenedSeconds(0.1);
                return prevUser;
            });
        }
    }

    
    function hanldeJanresListSlide({ side, janresListRef, event }){
        let marginLeft = getComputedStyle(janresListRef.current).marginLeft;
        event.target.style.background = "var(--highlightedBackgroundColor)";
        setTimeout(() => event.target.style.background = "var(--middleDarkBackgroundColor)", 200)

        if(side == "left" && displayJanresRange.l > 0){
            setDisplayJanresRange({ l: --displayJanresRange.l, h: --displayJanresRange.h});
        }
        else if(side == "right" && displayJanresRange.l < janres.length - 5){ //5 is number of displayed janres
            setDisplayJanresRange({ l: ++displayJanresRange.l, h: ++displayJanresRange.h + 1});
        }
        janresListRef.current.style.marginLeft = `${displayJanresRange.l * -janresListRef.current.querySelector("div").offsetWidth}px`;

    };

    function handlePlaylistOpen(playlist){
        console.log(playlist);
    }

    function handleAddToFavourite(song){
        if(!user) return;

        setUser((prevUser) => {
            prevUser.addFavSong(song);
            return prevUser;
        });
        
        //localStorage.setItem("user", JSON.stringify(user)); //Local storage does not copy methods as for me
    };

    function handleRemoveFromFavourite(songToRemove){
        if(!user) return;

        setUser((prevUser) => {
            prevUser.removeFavouriteSong(songToRemove);
            return prevUser;
        });

        setForceUpdateState(new Object);
        //localStorage.setItem("user", JSON.stringify(user)); //Local storage does not copy methods as for me
    };

    function handleAddToPlaylist({ songToPlaylist, playlistName }){
        //check if song is already in playlist
        for(let i = 0; i < user.playlists.length; i++){
            if(user.playlists[i].name == playlistName){
                user.playlists[i].songs.push(songToPlaylist);
                setUser(user);
                navigate(`/music/playlists/${playlistName}`)
                break;
            }
        }
        //navigate to the playlist //useNavigate()//
    };

    function handleRemoveFromPlaylist({ playlistName, songName }){
        for(let i = 0; i < user.playlists.length; i++){
            if(user.playlists[i].name == playlistName){
                user.playlists[i].removeSong(songName);
                setForceUpdateState(user);
                break;
            }
        }
    };

    function handleLogin({ login, password, cameFrom, event }){
        event.preventDefault();
        let userFound = false;

        for(let i = 0; i < users.length; i++){
            if(users[i].login == login && users[i].password == password){
                setUser(users[i]);
                navigate(cameFrom);
                userFound = true;
                break;
            }
        };

        if(!userFound){
            showError("Whong login or password");
        }
    };

    function handleLogout(){
        setUser(null);
    }

    function handleRegister({ nickname, login, password, cameFrom, event }){
        event.preventDefault();

        for(let i = 0; i < users.length; i++){
            if(users[i].login.toLowerCase() == login.toLowerCase()){
                showError("User already exists");
                return;
            }
        }

        const newUser = new User(nickname, login, password);
        users.push(newUser);
        setUser(newUser);

        navigate(cameFrom);
    };

    function handleSongCreate(newSong){
        if(!newSong.name || !newSong.janre || !newSong.src){
            showError("Fill all the fields");
            return;
        }

        songs.push(newSong);
        setSongsToDisplay(songs.slice(0, 10));
        console.log("Create", newSong);
    }

    function handleSongEdit({ editedSong, oldSongName }){
        console.log("Edit", editedSong, oldSongName);
        if(!editedSong.name || !editedSong.janre || !editedSong.src){
            showError("Fill all the fields");
            return;
        }

        for(let i = 0; i < songs.length; i++){
            if(songs[i].name === oldSongName){
                songs[i].changeName(editedSong.name);
                songs[i].changeJanre(editedSong.janre);
                songs[i].changeIconSrc(editedSong.iconSrc);
                songs[i].changeSrc(editedSong.src);
                setSongsToDisplay(songs.slice(0, 10));
                break;
            }
        }
    }

    function showError(errorText){
        setCurrentAppError((prevError) => ({...prevError, errorText: errorText}));
        setTimeout(() => setCurrentAppError(""), 3000);
    }

    return(
        <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
        <ErrorContext.Provider value={currentAppError} >
            <div className="App">
                <Layout
                    janres={janres}
                    displayJanresRange={displayJanresRange} 
                    janresListIsVisible={janresListIsVisible}
                    handleJanresListToggle={handleJanresListToggle}
                    handleJanresListHide={handleJanresListHide}
                    handleJanreChange={handleJanreChange} 
                    hanldeJanresListSlide={hanldeJanresListSlide}

                    newsList={news}

                    homePageHasBeenScrolled={homePageHasBeenScrolled}

                    songsToDisplay={songsToDisplay}
                    favSongs={user ? user.favSongs : []}
                    topics={topics}
                    handlePlay={handlePlay}
                    handlePlaylistOpen={handlePlaylistOpen}
                    handleTagChange={handleTagChange} 
                    handleAddToFavourite={handleAddToFavourite}
                    handleRemoveFromFavourite={handleRemoveFromFavourite}

                    handleSongCreate={handleSongCreate}
                    handleSongEdit={handleSongEdit}

                    handleAddToPlaylist={handleAddToPlaylist}
                    handleRemoveFromPlaylist={handleRemoveFromPlaylist}

                    handleSearch={handleSearch}
                    handleThemeChange={handleThemeChange}
                
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    handleRegister={handleRegister}

                    playingSong={playingSong} 
                    playerRef={playerRef} 
                    handleDurationProgress={handleDurationProgress} 
                    handleControlPlay={handleControlPlay} 
                    handleDurationChange={handleDurationChange} 
                    handleVolumeChange={handleVolumeChange}

                    showError={showError}

                    about={about}
                />

                <ErrorPopup />
            </div>
        </ErrorContext.Provider>
        </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
