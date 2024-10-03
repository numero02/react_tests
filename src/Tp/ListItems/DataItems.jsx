
export default function DataItems({items}){

    
    return items.map((item,key) => {
        return <tr key={key}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td><img src={item.image} className="img-thumbnail" alt="" /></td>
                    <td>{item.rating.rate} / 5</td>
                    
                </tr>
        })
}