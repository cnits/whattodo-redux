import React from "react";
import Auth from "./../Auth";
import { AuthStates } from "./../../core/constants";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authState: props.authState || AuthStates.SIGNIN
        }
    }
    componentWillMount() {
        // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
    }
    componentDidMount() {
        // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
        // Hàm này rất hữu dụng khi bạn làm việc thêm với Map, bởi vì map chỉ render được
        // khi có node (id) trong DOM
        // Nói tóm lại, hàm này được gọi để thông báo component đã tồn tại trên DOM,
        // từ đó các thao tác trên DOM sẽ có thể thực hiện bình thường đối với component này
    }
    componentWillReceiveProps(nextProps) {
        // Hàm này thực hiện liên tục mỗi khi props thay đổi
        // (1) Sử dụng để thay đổi trạng thái (state) của component phụ thuộc props
        // (2) Sử dụng các kết quả, khởi tạo biến có tính chất async. Ví dụ: Khởi tạo Google Map Api, đây là quá trình async,
        // do vậy, bạn không thể biết được khi nào khởi tạo xong, thì khi khởi tạo xong có thể truyền xuống component thông qua
        // props, và từ đó bạn có thể khởi tạo các dịch vụ khác.
        this.state.authState = nextProps.authState;
    }
    /*shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate " , nextProps, nextState);
        // Hàm này thực hiện khi state và props thay đổi
        // Hàm này sẽ trả về kết quả true/false, bạn sẽ cần sử dụng đến hàm này để xử lý xem có cần update component không
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        // Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
        // Nếu hàm trên trả về false, thì React sẽ không gọi hàm này
    }
    componentDidUpdate(prevProps, prevState) {
        // Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
    }
    componentWillUnmount() {
        // Hàm này thực hiện một lần duy nhất, khi component sẽ unmount
        // Hàm này hữu dụng khi bạn cần xoá các timer không còn sử dụng
    }*/
    render() {
        return (
            <Auth state={this.state.authState} />
        );
    }
};