<template>
  <div style="background-color: #d4d4d4; padding: 24px;">
    <v-row dense>
      <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        class="d-flex align-stretch pa-2"
      >
        <project
          :title="project.title"
          :link="project.link"
          :imageSrc="project.imageSrc"
          :description="project.description"
          :technologies="project.technologies"
          :roles="project.roles"
          :learningOutcomes="project.learningOutcomes"
          :challenges="project.challenges"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Alpine from '../assets/alpine.png'
import Blob from '../assets/blob.png'
import Ptcg from '../assets/ptcg.png'
import Ptcg2 from '../assets/ptcg.jpg'
import Snake from '../assets/snake.png'
import Project from '../components/Project.vue'
import EmojiReact from '../assets/emoji-react.png'
import FitnessTracker from '../assets/fitness-tracker.png'
export default {
  components: {Project},
  data () {
    return {
      projects: [
        {
          title: 'Fitness Tracker',
          link: 'https://nfb1799.github.io/fitness-tracker/',
          imageSrc: FitnessTracker,
          description: 'A full-stack fitness tracking application featuring workout logging, nutrition tracking, weigh-ins, and social features. Includes user authentication, real-time data sync, and offline support.',
          technologies: 'React, Firebase (Auth & Firestore), Vite, JavaScript, CSS',
          roles: 'Nik Barbero developed this app by himself',
          learningOutcomes: 'Gained hands-on experience with Firebase authentication and Firestore for real-time database management. Learned to implement offline-first functionality and build a multi-feature dashboard with React context for state management.',
          challenges: 'Integrating Firebase authentication with Firestore security rules while maintaining a seamless user experience. Implementing offline support required careful handling of data synchronization.',
        },
        {
          title: 'Pokémon TCG Search',
          link: 'https://nfb1799.github.io/pokemon-tcg-search/',
          imageSrc: Ptcg2,
          description: 'A React-based Pokémon TCG search application that queries the Pokemon TCG API to provide card images and current pricing information. Users can search for cards and view market values.',
          technologies: 'React, JavaScript',
          roles: 'Nik Barbero developed this app by himself',
          learningOutcomes: 'Advanced React development skills including state management, API integration, and handling real-time pricing data. Also gained experience working with external trading card game APIs.',
          challenges: 'Integrating multiple data sources for comprehensive card information and pricing was complex. Managing API rate limits and ensuring data accuracy across different pricing sources required careful implementation.',
        },
        {
          title: 'Emoji Games - React',
          link: 'https://nfb1799.github.io/emoji-games-react/',
          imageSrc: EmojiReact,
          description: 'A collection of games built with React that utilize emojis as the core assets.',
          technologies: 'React.js, JavaScript, HTML/CSS',
          roles: 'Nik Barbero developed this app by himself',
          learningOutcomes: 'A better understanding of React.js and its component-based architecture. I also learned how to manage state and props effectively in a React application.',
          challenges: 'Implementing responsive layouts so the games work well on both desktop and mobile devices.',
        },
        {
          title: 'Blob-Blob Game',
          link: 'https://telepathicgrunt.itch.io/blob-blob-game',
          imageSrc: Blob,
          description: 'A 2D puzzle game focusing on two amoebic blobs that must work together to escape the caves',
          technologies: 'Unity, C#',
          roles: 'Sound Designer, Co-Programmer',
          learningOutcomes: 'An increased knowledge of creating interacting systems within Unity. Also, a greater interest in sound design as well as the implementation of such in the back-end.',
          challenges: 'Fleshing out the design of our movement and puzzle mechanics took longer than anticipated. Many mechanics, especially movement, went through several iterations before we settled on the ones that felt best for gameplay.',
        },
        {
          title: 'Alpine Survival',
          link: 'https://people.rit.edu/nfb1799/235/project3/',
          imageSrc: Alpine,
          description: 'A browser-based downhill snowboarding game where the player survives as long as possible while collecting coins and dodging obstacles.',
          technologies: 'PixiJS, JavaScript, HTML/CSS',
          roles: 'Nik Barbero developed this game by himself',
          learningOutcomes: 'A great understanding of PixiJS and its capabilities as well as a better feel for the math involved with graphical simulations.',
          challenges: 'Movement of the coins and obstacles at varying angles was solved by dividing the scene into a grid with assigned slopes.',
        },
        {
          title: 'Pokémon TCG Pokédex',
          link: 'https://people.rit.edu/nfb1799/330/project2/',
          imageSrc: Ptcg,
          description: 'A Pokémon TCG search app that queries multiple APIs to provide images of cards. Users can also save and display a list of their favorite cards.',
          technologies: 'JavaScript, HTML/CSS',
          roles: 'Nik Barbero developed this app by himself',
          learningOutcomes: 'Knowledge of implementing several APIs to create a cohesive experience as well as saving small amounts of user-specific data.',
          challenges: 'In order to allow for the favoriting of cards, I needed to learn how to save data for specific users. The solution I used was saving card-IDs to local storage and querying the API with those IDs only to display favorites.',
        },
        {
          title: 'Phyllotaxis Snake',
          link: 'https://people.rit.edu/nfb1799/330/project1/',
          imageSrc: Snake,
          description: 'An interactive Snake game that prints phyllotaxis where points are scored.',
          technologies: 'Canvas API, JavaScript, HTML/CSS',
          roles: 'Nik Barbero developed this app by himself',
          learningOutcomes: 'This project taught me how versatile the Canvas API is and how useful it can be for creating interactive experiences.',
          challenges: 'There was an issue with animating the snake movement at the same time as the phyllotaxis. This was solved by using multiple canvases and copying the image from one to the other.',
        },
      ]
    }
  },
}
</script>

<style>

</style>