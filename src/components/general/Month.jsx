import React from "react";

function Month(props) {

    return (
        <div className="month">
            <table>
                <caption>{props.month.name}</caption>
                <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    {generateMonthViewStructure(props.month)}
                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>31</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

function generateMonthViewStructure(month, cellsInRow = 7) {
    let structure = { tr: [], td: [] };

    for (let i = 0; i < 5; i++) {
        structure.td.push(<td></td>)
    }

    for (let i = 0; i < month.amountOfDays; i++) {
        if (structure.td.length % 7 === 0) {
            structure.tr.push(<tr>{[...structure.td]}</tr>)
            structure.td = [];
        }
        structure.td.push(<td>{i + 1}</td>);
    }

    structure.tr.push(<tr>{[...structure.td]}</tr>);
    return structure.tr;
}

export default Month;