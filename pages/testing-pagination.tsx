import * as React from 'react';
import {useEffect} from "react";
import {Grid, Pagination} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/system";

export default function TablePaginationDemo() {
    const [page, setPage] = React.useState(2);
    const [element, setElement] = React.useState([]);


    const getPaginatedData = async (page: string, size: string) => {
        try {
            const res = await fetch(
                `https://api.punkapi.com/v2/beers?page=${page}&per_page=${size}`
            );
            const resp = await res.json();
            setElement(resp);
            // console.log(resp);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPaginatedData("1", "10").then(null);
    }, [])

    const handleChangePage = (
        event: any,
        newPage: number,
    ) => {
        getPaginatedData(newPage.toString(), "10").then(null);
        setPage(newPage);
    };

    const Element = (obj: any) => {
        return <Typography variant="subtitle1" gutterBottom className='text-black'>
                     {obj.element.brewers_tips}
              </Typography>;
    }


    return (

        <>
            <div className="w-screen mx-auto bg-white h-[85vh]">
                <div className="flex flex-col p-10">
                    <div className='mb-10'>
                        {element.map((e, index) => {
                            return <Element key={index} element={e}/>
                        })}
                    </div>
                    <div>
                        <Stack alignItems="center" component='div'>
                            <Pagination count={element.length} onChange={handleChangePage}/>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}