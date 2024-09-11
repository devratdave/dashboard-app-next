const MultiAttributeCard = ({ heading, data }: 
  {
    heading: string
    data: { name: string; value: number }[];
  }) => {
    return(
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-bold">{heading}</h3>
        <ul>
          {data.map((val: { name: string; value: number }) => (
            <li key={val.name}>
              {val.name}: {val.value.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>

    )
}

export default MultiAttributeCard