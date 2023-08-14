import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PomodoroView from '../views/PomodoroView.vue';
import HappeningNowView from '../views/HappeningNowView.vue';
import InFlightView from '../views/InFlightView.vue';
import OnDeckView from '../views/OnDeckView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/pomodoro',
            name: 'Pomodoro Timer',
            component: PomodoroView,
        },
        {
            path: '/happening-now',
            name: 'Happening Now',
            component: HappeningNowView,
        },
        {
            path: '/in-flight',
            name: 'In Flight',
            component: InFlightView,
        },
        {
            path: '/on-deck',
            name: 'On Deck',
            component: OnDeckView,
        },
    ],
});

export default router;
