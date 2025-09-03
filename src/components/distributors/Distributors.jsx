import { DistributorsList } from "./DistributorsList"

export const Distributors = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-[2rem]">
      <h1 className="mb-10 text-[4rem] font-bold tracking-wider">
        Distributors
      </h1>
      <DistributorsList />
    </div>
  )
}
