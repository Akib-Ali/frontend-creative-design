import React, { useState } from "react";
import Pagination from "../../component/pagination/pagination";

const BlogList = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };


    const items = [
        { id: 1, title: "How to Code", author: "John Doe", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 2, title: "React Basics", author: "Jane Smith", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 3, title: "JavaScript Tips", author: "Alice Johnson", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 4, title: "CSS Tricks", author: "Bob Brown", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 5, title: "HTML Guide", author: "Charlie White", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 6, title: "Node.js Overview", author: "Daisy Black", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 7, title: "Redux Simplified", author: "Eve Green", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 8, title: "React Hooks", author: "Frank Blue", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 9, title: "Next.js Basics", author: "Grace Yellow", imagepath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s" },
        { id: 10, title: "Advanced React", author: "Hank Pink" },
        { id: 11, title: "How to Code", author: "John Doe" },
        { id: 12, title: "React Basics", author: "Jane Smith" },
        { id: 13, title: "JavaScript Tips", author: "Alice Johnson" },
        { id: 14, title: "CSS Tricks", author: "Bob Brown" },
        { id: 15, title: "HTML Guide", author: "Charlie White" },
        { id: 16, title: "Node.js Overview", author: "Daisy Black" },
        { id: 17, title: "Redux Simplified", author: "Eve Green" },
        { id: 18, title: "React Hooks", author: "Frank Blue" },
        { id: 19, title: "Next.js Basics", author: "Grace Yellow" },
        { id: 20, title: "Amil", author: "Hank Pink" },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedItems = items.slice(offset, offset + itemsPerPage);

    return (
        <>
            <div className="container mt-5">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>#</th>
                            <th>Title</th>
                            <th>Profile</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedItems.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{offset + index + 1}</td>
                                <td>{item.title}</td>
                                <td><img src={item.imagepath} style={{ height: "40px", width: "40px", borderRadius: "50%" }} /></td>

                                <td>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toggleCheckbox} checked={isChecked} />
                                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm ms-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                pageCount={Math.ceil(items.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default BlogList;
