import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

gsap.to('#welcome', {
	delay: 12.5,
	duration: 2,
	text: "This is",
	ease: "power3"
})

gsap.to('#actions', {
	delay: .5,
	duration: 1,
	text: "codes.",
	ease: "power1"
})

gsap.to('#actions', {
	delay: 3,
	duration: .2,
	text: "",
	ease: "power1"
})

gsap.to('#actions', {
	delay: 4,
	duration: 1,
	text: "creates.",
	ease: "power2"
})

gsap.to('#actions', {
	delay: 7,
	duration: .2,
	text: "",
	ease: "power1"
})

gsap.to('#actions', {
	delay: 8,
	duration: 1,
	text: "solves.",
	ease: "power3"
})

gsap.to('#actions', {
	delay: 12,
	duration: .2,
	text: "",
	ease: "none"
})