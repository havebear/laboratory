/*
 * @Author: 616749285@qq.com
 * @Date: 2020-09-11 16:19:55
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-09-11 17:43:24
 * @Description:  平台变量
 */

var theme = [
  // 浅色
  {
    // 不变
    '@white_color':                 '#ffffff',
    '@danger_color':                '#ff4d4f',
    '@disabled_color':              '#51575B',
    // 通用
    '@header_bg':                   '#FFFFFF',
    '@page_bg':                     '#F6F7FB',
    '@panel_bg':                    '#FFFFFF',
    '@side_nav_bg':                 '#0090FF',
    '@side_nav_selected_bg':        '#0072F7',
    '@side_nav_hover_bg':           'rgba(0, 144, 255, 0.5)',
    '@font_color_1':                '#222328',
    '@font_color_2':                '#51575B',
    '@font_color_subscript':        '#7B8084',
    '@font_color_info':             '#0090ff',
    '@border_color':                '#e8e8e8',
    '@navigation_list_hover_bg':    '#263051',
    // Table
    '@table_header_bg':             '#EFF0F5',
    '@table_header_color':          '#222328',
    '@table_row_hover_bg':          '#e6f7ff',
    '@table_selected_row_bg':       '#e6f7ff',
    '@table_row_odd_bg':            '#FFFFFF',
    '@table_row_even_bg':           '#F9F9FB',
    '@table_body_color':            '#51575B',
    // Form
    '@label_color':                 '@font_color_2',
    // Input
    '@input_placeholder_color':     '#7B8084',
    '@input_color':                 '@font_color_2',
    '@input_border_color':          '#d9d9d9',
    '@input_bg':                    '#fff',
    //select
    '@select_bg':                   '#FFFFFF',
    '@select_item_selected_bg':     '#fafafa',
    //modal
    '@modal_bg':                    '#FFFFFF',
    //button
    '@btn_color':                   '@font_color_subscript',
    '@btn_boder_color':             '#d9d9d9',
    //popover
    '@popover_boxshadow_color':     'rgba(112, 125, 131, 0.15)',
    //datePicker
    '@datePicker-header-color':     '@font_color_subscript',
    '@datePicker_boxshadow_color':  '@popover_boxshadow_color',
    //switch
    '@switch_bg':                   'rgba(0, 0, 0, 0.25)',
    //滚动条 (chrome下有效)
    '@scrollbar_bg':                '#F7F7F7',
    '@scrollbar_thumb_bg':          '#E6E6E6',
    '@scrollbar_thumb_hover':       '#D8D8D8',
  },
  // 深色
  {
    // 不变
    '@white_color':                 '#ffffff',
    '@danger_color':                '#ff4d4f',
    '@disabled_color':              '#51575B',
    // 通用
    '@header_bg':                   '#060b17', // 顶部导航栏背景      #FFFFFF
    '@page_bg':                     '#0a1226', // 页面背景           #F6F7FB
    '@panel_bg':                    '#16203e', // 面板背景           #FFFFFF
    '@side_nav_bg':                 '#0d152b', // 侧边菜单背景        #0090FF
    '@side_nav_selected_bg':        '#0090ff', // 侧边菜单选中背景    #0072F7
    '@side_nav_hover_bg':           'rgba(0, 144, 255, 0.3)', // 侧边菜单移入背景    rgba(0, 144, 255, 0.5)
    '@font_color_1':                '#ffffff', // 1级字体颜色        #222328
    '@font_color_2':                '#c9d8ef', // 2级字体颜色        #51575B
    '@font_color_subscript':        '#849dc1', // 角标字体颜色       #7B8084
    '@font_color_info':             '#0090ff', // 信息字体颜色       #0090FF
    '@border_color':                '#1E2E4C', // 边框颜色
    '@navigation_list_hover_bg':    '#263051', // 工作台列表鼠标移入
    // Table
    '@table_header_bg':             '#263051', //表格头部背景  #EFF0F5
    '@table_header_color':          '@font_color_1', //表格头部字体颜色 #222328
    '@table_row_hover_bg':          '#263051', //表格hover背景颜色  #e6f7ff
    '@table_selected_row_bg':       '#263051', //表格选中背景颜色  #e6f7ff
    '@table_row_odd_bg':            '#16203E', // 表格奇数行背景      #FFFFFF
    '@table_row_even_bg':           '#1E2847', // 表格偶数行背景      #F9F9FB
    '@table_body_color':            '@font_color_2', //表格内容字体颜色   #51575B
    // Form
    '@label_color':                 '@font_color_2',
    // Input
    '@input_placeholder_color':     '#707C97', //#7B8084
    '@input_color':                 '@font_color_2', //rgba(0,0,0,.65)
    '@input_border_color':          '#314B6F', //#d9d9d9
    '@input_bg':                    '#19203C', //#fff
    //select
    '@select_bg':                   '#0D152C',  // 下拉组件背景  #FFFFFF
    '@select_item_selected_bg':     '#1E2847', //选中项背景  #fafafa
    //modal
    '@modal_bg':                    '#263051', //弹框背景  #FFFFFF
    //button
    '@btn_color':                   '#849DC1',  //字体颜色 #rgba(0, 0, 0, 0.65)
    '@btn_boder_color':             '#849DC1', //边框颜色 #d9d9d9
    //popover
    '@popover_boxshadow_color':     'rgba(0, 0, 0, 0.3)', //popover投影颜色   rgba(112, 125, 131, 0.15)
    //datePicker
    '@datePicker-header-color':     '#849DC1', //头部颜色 rgba(0, 0, 0, 0.65)
    '@datePicker_boxshadow_color':  '@popover_boxshadow_color', //datePicker投影颜色   rgba(112, 125, 131, 0.15)
    //switch
    '@switch_bg':                   '#849DC1', //开关默认背景 //rgba(0, 0, 0, 0.25)
    //滚动条 (chrome下有效)
    '@scrollbar_bg':                '#2E3752', //滚动条整体背景  #F7F7F7
    '@scrollbar_thumb_bg':          '#5C6378', //滑块背景 #E6E6E6
    '@scrollbar_thumb_hover':       '#5C6378', //滑块hover  #D8D8D8
  }
]
