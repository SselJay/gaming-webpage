import React from 'react'
import bgpic from '../public/gamebg1.jpeg';
import dota2 from '../public/dota.jpg'
import valorant from '../public/valorant.jpg'
import titanfall from '../public/titanfall.jpg'
import warzone from '../public/warzone.jpg'
import overwatch from '../public/overwatch.jpg'
import battlefield from '../public/battlefield.jpg'
import spotifya from '../public/spotify.png';
import discorda from '../public/dcfill.png';
import facebooka from '../public/fbfill.png';
import './App.css'

function App() {

  return (
    <div className="App">
    <div className="flex flex-col lg:flex-row max-h-[5200px]">
    <img className='fixed -z-10 h-[785px] opacity-50' src={bgpic} alt="" />
      <div className="moveup lg:fixed text-green-400 p-10 bg-[#fff0db] bg-opacity-40 h-[100%]">
        <p className='text-8xl font-bold mt-32'>GameNote</p>
        <p className='text-2xl max-w-lg text-center mx-auto'>A website where you can learn the basic knowledge about the most popular video games there is.</p>
        <p className='text-2xl max-w-lg text-center mt-20 mx-auto'>Creator: Levy Buan</p>
        <p className='text-2xl max-w-lg text-center mx-auto'>STEM - 11 SJ5</p>


        
        <div className='flex gap-10 flex-wrap justify-center mt-10 bg-green-100 rounded-2xl'>
        <div className="flex flex-col">




          <a className='text-lg text-green-500 hover:text-black transition' href='#dota'>Dota 2</a>
          <a className='text-lg text-green-500 hover:text-black transition' href='#valorant'>Valorant</a>
          <a className='text-lg text-green-500 hover:text-black transition' href='#titanfall'>Titanfall 2</a>
        </div>

        <div className="flex flex-col">
          <a className='text-lg text-green-500 hover:text-black transition' href='#warzone'>Warzone</a>
          <a className='text-lg text-green-500 hover:text-black transition' href='#overwatch'>Overwatch</a>
          <a className='text-lg text-green-500 hover:text-black transition' href='#battlefield'>Battlefield</a>
        </div>
        </div>


      <div className="flex mx-auto mt-10 w-[450px]">
      <div className='mx-auto'>
<a href="https://open.spotify.com/user/22spckdubd6yfkzcta3nj562a?si=KdTpFjp4Td6PhGa_4w4VSw&utm_source=copy-link" target={'https://open.spotify.com/user/22spckdubd6yfkzcta3nj562a?si=KdTpFjp4Td6PhGa_4w4VSw&utm_source=copy-link'}>
        <img className='max-w-[30%] mx-auto transition  hover:animate-ping' src={spotifya} alt="" /></a>
      </div>
      <div>
<a href="https://www.discord.com/users/814431111827685407" target={'https://www.discord.com/users/814431111827685407'}>
        <img className='w-[30%] mx-auto transition  hover:animate-ping' src={discorda} alt="" /></a>
      </div>
      <div>
<a href="https://www.facebook.com/profile.php?id=100087382662427&mibextid=ZbWKwL" target={'https://www.facebook.com/profile.php?id=100087382662427&mibextid=ZbWKwL'}>
        <img className='w-[30%] mx-auto transition hover:animate-ping' src={facebooka} alt="" /></a>
      </div>
</div>
      </div>
      <div className="gohide text-black p-10 w-[592px] bg-opacity-40">
        
      </div>
      
      <div className="flex-1 text-5xl font-extrabold text-black p-10 bg-[#857c6f] bg-opacity-50">
      <p id='dota' className='text-green-400 font-medium'>Dota 2</p>
      <img className='mx-auto mt-10' src={dota2} alt="" />
      <p className='text-green-200 mt-10 text-lg font-light'>Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover.? <a href='https://www.dota2.com/home' className='text-green-400 hover:text-green-500'>learn more...</a></p>


      <p id='valorant' className='text-green-400 mt-20 font-medium'>Valorant</p>
      <img className='mx-auto mt-10' src={valorant} alt="" />
      <p className='text-green-200 mt-10 text-lg font-light'>is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving. <a href='https://www.dota2.com/home' className='text-green-400 hover:text-green-500'>learn more...</a></p>



      <p id='titanfall' className='text-green-400 mt-20 font-medium'>Titanfall 2</p>
      <img className='mx-auto mt-10' src={titanfall} alt="" />
      <p className='text-green-200 mt-10 text-lg font-light'>is a first-person shooter video game, developed by Respawn Entertainment and published by Electronic Arts. A sequel to 2014's Titanfall, the game was released worldwide on October 28, 2016, for Windows, PlayStation 4, and Xbox One. In Titanfall 2, players control Titans, mecha-style exoskeletons and their pilots, who are agile and equipped with a variety of skills ranging from wall-running to cloaking. Set in a science fiction universe, the single-player campaign follows the story of Jack Cooper, a rifleman from the Frontier Militia, who bonds with his mentor's Titan BT-7274 after his mentor is killed in action. Together, they embark on a quest to stop the Interstellar Manufacturing Corporation (IMC) from launching a superweapon that is threatening to destroy the Militia planet Harmony.<a href='https://www.dota2.com/home' className='text-green-400 hover:text-green-500'>learn more...</a></p>
      

      



      <p id='warzone' className='text-green-400 mt-20 font-medium'>Warzone</p>
      <img className='mx-auto mt-10' src={warzone} alt="" />
      <p className='text-green-200 mt-10 text-lg font-light'>is a free-to-play battle royale video game released on March 10, 2020, for PlayStation 4, Xbox One, and Microsoft Windows with a next-gen release for the Playstation 5 and Xbox Series X/S in 2021. The game is a part of 2019's Call of Duty: Modern Warfare and is connected to 2020's Call of Duty: Black Ops: Cold War and 2021's Call of Duty: Vanguard, but does not require purchase of any of the aforementioned titles, and was introduced during Season 2 of Modern Warfare content. Warzone was developed by Infinity Ward and Raven Software (the latter later credited as the sole developer following the integration of Cold War's content) and published by Activision.[1] Warzone allows online multiplayer combat among 150 players, although some limited-time game modes support 200 players. The game features both cross-platform play and cross-platform progression between the three aforementioned titles.<a href='https://www.dota2.com/home' className='text-green-400 hover:text-green-500'>learn more...</a></p>
      

      



      <p id='overwatch' className='text-green-400 mt-20 font-medium'>Overwatch</p>
      <img className='mx-auto mt-10' src={overwatch} alt="" />
      <p className='text-green-200 mt-10 text-lg font-light'>is a 2022 first-person shooter by Blizzard Entertainment. As a sequel to the 2016 hero shooter Overwatch, the game intends a shared environment for player-versus-player (PvP) modes while introducing persistent cooperative modes. A major change in PvP modes was to reduce team sizes from six to five. Several major characters were also reworked. Overwatch 2 is free-to-play on Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S in early access on October 4 and features full cross-platform play.<a href='https://www.dota2.com/home' className='text-green-400 hover:text-green-500'>learn more...</a></p>
      

      



      <p id='battlefield' className='text-green-400 mt-20 font-medium'>Battlefield</p>
      <img className='mx-auto mt-10' src={battlefield} alt="" />
      <p className='text-green-200 mt-10 text-lg font-light'>is a series of first-person shooter video games developed by Swedish company EA DICE and is published by American company Electronic Arts. It started out on Microsoft Windows and OS X with Battlefield 1942, which was released in 2002. The Battlefield series has been played by more than 50 million players worldwide as of August 2012.<a href='https://www.dota2.com/home' className='text-green-400 hover:text-green-500'>learn more...</a></p>
      

      
      </div>
    </div>
      
    </div>
  )
}

export default App
