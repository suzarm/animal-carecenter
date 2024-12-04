import Card from './Card';

function Main(){
    const cards=[
        {img:'images/antler-antler-carrier-fallow-deer-hirsch.jpg', text:'We have got dogs, cats, lions, snakes, birds, horses, monkeys, giraffes, hippos, cows, rabbits.! ',button:'Go somewhere'},
        {img:'images/download.jpg', text:'Wow your audience with the best stock photos of animals available in the market.',button:'Click me'},
        {img:'images/kitty-cat-kitten-pet-45201.jpeg', text:'Explore thousands of animal images from snake photos to pets and even dinosaur photos.',button:'Do something'},
    ]
    return(
        <>
        {
            cards.map((card) => <Card img={card.img} text={card.text} button={card.button}></Card> )
        }
        
        </>
    )
}

export default Main;