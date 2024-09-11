/* eslint-disable @typescript-eslint/no-explicit-any */
const SingletonCard = ({ heading, value, unit }: { heading: string, value: number, unit?: string }) => {
  return(
  <div className="bg-white p-4 shadow rounded-lg">
    <h3 className="text-lg font-bold">{heading}</h3>
    <p className="text-2xl">{value} {unit}</p>
  </div>
  )
}

export default SingletonCard