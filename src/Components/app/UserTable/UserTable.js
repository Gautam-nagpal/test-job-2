import React, { useEffect, useState } from "react";
import CustomTable from "../../Common/CustomTable";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Tooltip, TableCell, Button } from '@material-ui/core';
import { useSelector } from "react-redux";
import { convertValueFromPrice, randomNameGenerator } from "../../../utils";


export default function UserTable() {

    const { userJSON = [] } = useSelector(state => state.user)

    const [list, setList] = useState(userJSON || [])


    useEffect(() => {
        setList(userJSON)
    }, [userJSON])


    const handleDelete = (index) => {
        let updatedList = [...list];

        updatedList.splice(index, 1);


        setList(updatedList)

    }



    const addData = () => {
        let obj = {
            name: randomNameGenerator(8), data: [
                [{ month: 'Jan', expense: Math.floor(Math.random() * 200) }, { month: 'Feb', expense: Math.floor(Math.random() * 200) }, { month: 'Mar', expense: Math.floor(Math.random() * 200) }],
                [{ month: 'Apr', expense: Math.floor(Math.random() * 200) }, { month: 'May', expense: Math.floor(Math.random() * 200) }, { month: 'Jun', expense: Math.floor(Math.random() * 200) }],
                [{ month: 'Jul', expense: Math.floor(Math.random() * 200) }, { month: 'Aug', expense: Math.floor(Math.random() * 200) }, { month: 'Sep', expense: Math.floor(Math.random() * 200) }],
                [{ month: 'Oct', expense: Math.floor(Math.random() * 200) }, { month: 'Nov', expense: Math.floor(Math.random() * 200) }, { month: 'Dec', expense: Math.floor(Math.random() * 200) }],
            ]
        }

        let updatedList = [...list];
        updatedList.push(obj);


        setList(updatedList)


    }


    return (
        <>
            <Button variant="contained" color="primary" onClick={(e) => { addData(e) }}>Add Random Data</Button>

            <CustomTable
                tableHeading={["S.no", "Name", "Total Expence (yearly)", "Quarter Expence (1,2,3,4)", "Rewards Points", "Action"]}
                rowsData={createUserTableCell(list, handleDelete)}

            />
        </>
    )
}




function createUserTableCell(data = [], handleDelete) {

    return data && data && data.length ?
        data.map((item, index) => {
            const { name, data: monthlyData = [] } = item;
            let quaterExpence = monthlyData && monthlyData.length && monthlyData.map((v, i) => {
                let sumArr = v.reduce((a, b) => { return { expense: parseInt((a && a.expense) || 0) + parseInt((b && b.expense) || 0) } })
                return sumArr.expense || 0
            })

            let total = quaterExpence.reduce((a, b) => a + b)

            let allMonthsValue = monthlyData && monthlyData.length && monthlyData.flat(1);

            return <React.Fragment key={index}>
                <TableCell >{index + 1}</TableCell>
                <TableCell>{name || ''}</TableCell>
                <TableCell>{total || ''}</TableCell>
                <TableCell>{quaterExpence.join(", ") || ''}</TableCell>
                <TableCell>
                    <Tooltip title={allMonthsValue.map(itm => { return `${itm.month} : ` + convertValueFromPrice(itm.expense) + "\n ," })} placement="bottom-start">
                        <p>{convertValueFromPrice(total) || ''}</p>
                    </Tooltip>
                </TableCell>
                <TableCell >
                    <DeleteOutlineIcon className="cur-pointer" onClick={() => handleDelete(index)} />
                </TableCell>
            </React.Fragment>
        }) : []
}
