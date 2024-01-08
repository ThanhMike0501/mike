import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faGear, faFilter, faEllipsis, faMagnifyingGlass, faEye, faCaretDown, faEllipsisVertical, faCaretLeft, faCaretRight, faBell, faUser, faBorderNone, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="topnav">
          <a href="index.html">eProcurement</a>
          <a href="#home">Trang chủ</a>
          <a href="index.html">Danh mục</a>
          <a href="index.html">Kế hoạch VTTB</a>
          <a href="index.html">Phương án/Chiến lược</a>
          <a href="index.html">Dự án/KHLCNT</a>
          <a className="hehe" href="index.html">
            Đấu thầu
          </a>
          <a href="index.html">Hợp đồng</a>
          <a href="index.html">Báo cáo</a>
          <div className="useroption">
            <a href="">
              <i><FontAwesomeIcon icon={faBell} /></i>
            </a>
            <a href="">
              <i><FontAwesomeIcon icon={faGear} /></i>
            </a>
            <a href="">
              <i><FontAwesomeIcon icon={faUser} /></i>

            </a>
            <a href="">
              <i><FontAwesomeIcon icon={faBorderAll} /></i>
            </a>
          </div>
        </div>
        <div className="second-row">
          <div>
            <a href="">Đấu thầu</a> /
            <a href="">Chào hàng cạnh tranh thông thường</a> /
            <a href="">Hồ sơ yêu cầu</a>
          </div>
          <h2 style={{ margin: 0 }}>HỒ SƠ YÊU CẦU</h2>
        </div>
      </header>
      <div className="mainpart">
        <div className="headermainpart">
          <h3 style={{ marginTop: "1%", marginBottom: "0%" }}>
            Danh sách Hồ sơ yêu cầu - Hình thức Chào hàng cạnh tranh thông
            thường
          </h3>
          <p style={{ marginTop: "0%" }}>
            Danh sách Hồ sơ yêu cầu (HSYC) được thêm mới, sửa, xóa
          </p>
        </div>
        <div className="maintable">
          <div>
            <div className="wrapper">
              <div className="view">
                <a href="">
                  <FontAwesomeIcon icon={faEye} />View: View All
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </div>
              <div className="rightpart">
                <a href=""><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></a>
                <a href=""><i><FontAwesomeIcon icon={faGear} /></i></a>
                <a href=""><i><FontAwesomeIcon icon={faFilter} /></i></a>
                <a href=""><i><FontAwesomeIcon icon={faEllipsis} /></i></a>
                <a href=""><button className="">Tạo mới HSYC +</button></a>
              </div>
            </div>
            <table>
              <tbody>
                <tr className="hangdau">
                  <th>Mã HSYC</th>
                  <th>Mã gói thầu</th>
                  <th>Tên gói thầu</th>
                  <th>Nguồn vốn</th>
                  <th>Hình thức nộp HS</th>
                  <th>Người tạo</th>
                  <th>Ngày tạo</th>
                  <th>Trạng thái</th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0001</a>
                  </td>
                  <td>
                    <a href="">GT038</a>
                  </td>
                  <td>Gói thầu mua sắm MBA</td>
                  <td>Đầu tư xây dựng</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>03/05/2003</td>
                  <td>
                    <img src="./src/online.png" alt="" srcset="" /> Hoạt động{" "}
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0002</a>
                  </td>
                  <td>
                    <a href="">GT037</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 9</td>
                  <td>Đầu tư xây dựng</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>03/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0003</a>
                  </td>
                  <td>
                    <a href="">GT036</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 8</td>
                  <td>Đầu tư xây dựng</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>03/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0004</a>
                  </td>
                  <td>
                    <a href="">GT035</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 7</td>
                  <td>Đầu tư xây dựng</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>03/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0005</a>
                  </td>
                  <td>
                    <a href="">GT034</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 6</td>
                  <td>Đầu tư xây dựng</td>
                  <td>Không qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>02/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0006</a>
                  </td>
                  <td>
                    <a href="">GT033</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 5</td>
                  <td>Sản xuất kinh doanh</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>02/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0007</a>
                  </td>
                  <td>
                    <a href="">GT032</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 4</td>
                  <td>Sản xuất kinh doanh</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>02/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0008</a>
                  </td>
                  <td>
                    <a href="">GT031</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 3</td>
                  <td>Sản xuất kinh doanh</td>
                  <td>Không qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>02/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0009</a>
                  </td>
                  <td>
                    <a href="">GT030</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 2</td>
                  <td>Sản xuất kinh doanh</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>01/05/2003</td>
                  <td>
                    <img src="./online.png" alt="" /> Hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">HSYC0010</a>
                  </td>
                  <td>
                    <a href="">GT029</a>
                  </td>
                  <td>Gói thầu mua sắm MBA 1</td>
                  <td>Sản xuất kinh doanh</td>
                  <td>Qua mạng</td>
                  <td>Vũ Hồng Nhung</td>
                  <td>01/05/2003</td>
                  <td>
                    <img src="./offline.png" alt="" /> Ngừng hoạt động
                  </td>
                  <td>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                  </td>
                </tr>
                <div></div>
              </tbody>
            </table>
          </div>
          <div className="footer_tab">
            <div className="lft">
              <div className="items">
                <p>
                  Items per page : 10<i><FontAwesomeIcon icon={faCaretDown} /></i>
                  1-10 of 500 items
                </p>
              </div>
            </div>
            <div className="rig">
              <div className="items2">
                <p>
                  1<i><FontAwesomeIcon icon={faCaretDown} /></i> of 50 pages
                  <span className="text"> </span>{" "}
                  <i><FontAwesomeIcon icon={faCaretLeft} /></i>{" "}
                  <i><FontAwesomeIcon icon={faCaretRight} /></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;