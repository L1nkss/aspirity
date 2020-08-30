import React, { useState, useEffect } from "react";
import {Button, Table} from "reactstrap";
import TableCell from "./components/table-cell";
import Loader from "../spinner/spinner";
import TableDropdown from "../dropdown/dropdown";
import {TYPE_OPTIONS } from "../../constants/constants";
import { css } from 'glamor'
import ActivityChart from "../chart/chart";

const TableUserActivity = (props) => {
    const tableClass = css({
       width: "768px"
    });
    const tableHeaderClass = css({
       width: "15%",
        ":hover": {
           cursor: "pointer"
        }
    });
    const tableHeaderClassButtons = css({
       width: "15%"
    });
    const { data } = props;
    const [ sortableData, setSortableData ] = useState(null);
    const [ sortDirection, setSortDirection] = useState({
        date: "default",
        distance: "default"
    });

    function changeAcitivityFilter(filter) {

        if (filter === "All") {
            setSortableData([...data]);
            return
        }

        const newArray = data.filter((element) => element.activity === filter);
        setSortableData([...newArray]);
    }

    function sort(type) {
        if (sortDirection[type] === "default") {
            setSortDirection({...sortDirection, [type]: "asc"});
        }
        const values = sortableData.sort((a, b) => {
            const direction = sortDirection[type] === "asc";

            // Присваиваем значение из объекта в новые переменные
            let first = a[type];
            let next = b[type];

            if (type === "date") {
                first = new Date(first);
                next = new Date(next);
            }

            if (first < next) {
                return direction ? -1 : 1;
            } else if (first > next) {
                return direction ? 1 : -1;
            } else {
                return 0;
            }
        });
        setSortDirection({...sortDirection, [type]: sortDirection[type] === "asc" ? "desc" : "asc"});
        setSortableData([...values]);
    }

    useEffect(() => {
        setSortableData(data);
    },[data]);

    function createTableCells(deleteHandler, changeHandler) {
        return sortableData.map((element) => {
           return <TableCell
               key={element._id}
               id={element._id}
               activity={element.activity}
               comment={element.comment}
               date={element.date}
               deleteHandler={deleteHandler}
               changeHandler={changeHandler}
               distance={element.distance} />
        });
    }

    return (
        <Table className={`${tableClass}`}>
            <thead>
            <tr>
                <th
                    className={`${tableHeaderClass}`}
                    onClick={() => sort("date")}>
                    Date
                </th>
                <th
                    className={`${tableHeaderClass}`}
                >
                    <TableDropdown
                        changeFilter={changeAcitivityFilter}
                        items={["All", ...TYPE_OPTIONS]}
                    />
                </th>
                <th
                    className={`${tableHeaderClass}`}
                    onClick={() => sort("distance")}
                >
                    Distance
                </th>
                <th className="w-25">Comment</th>
                <th className={`${tableHeaderClassButtons}`} >
                    <ActivityChart data={data} render={(callback) => (
                        <Button outline size="sm" color="info" className="mr-2" onClick={callback}>
                            Show chart
                        </Button>
                    )} />
                </th>
            </tr>
            </thead>
            <tbody>
                { props.isLoading && <tr><td><Loader isAbsolute="true" /></td></tr>}
                { sortableData && createTableCells(props.deleteActivity, props.changeActivity)}
            </tbody>
        </Table>
    )
};

export default TableUserActivity;
