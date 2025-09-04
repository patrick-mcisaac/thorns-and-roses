import { RetailersList } from "./RetailersList"

export const Retailers = () => {
    return (
        <div className="flex flex-col items-center gap-10 p-[2rem]">
            <h1 className="mb-10 text-[4rem] font-bold tracking-wider">
                Retailers
            </h1>
            <RetailersList />
        </div>
    )
}
