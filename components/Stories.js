import StoryCard from './StoryCard';

const stories = [
    {
        name: "Amritanshu",
        src: "https://portfolio-amritanshu.netlify.app/static/media/profile.a89d857f9ea5ebe47198.png",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "jeff bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckberberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zuy"
    },

];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name}
                src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
