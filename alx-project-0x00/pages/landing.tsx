import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight ">Landing Page</h1>
            <Card />
            <Button title="Click Me" styles="size-1/4 rounded-sm" onClick={() => alert('Button Clicked!')} />
            <Button title="Click Me" styles="size-2/4 rounded-md" onClick={() => alert('Button Clicked!')} />
            <Button title="Click Me" styles="size-3/4 rounded-full" onClick={() => alert('Button Clicked!')} />
        </div>
    )
}

export default Landing;