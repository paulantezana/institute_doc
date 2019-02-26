import React from 'react'
import { Tree, Icon, Input } from 'antd';
import { IconGO,IconHtml,IconJs } from '../icons';
import Router from 'next/router';

const DirectoryTree = Tree.DirectoryTree;
const {TreeNode } = Tree;

const Search = Input.Search;

const gData = [
    {
        key: "config",
        title: "config",
        icon: '',
        children: [
        {
            key: "config-config",
            title: "config",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "config-database",
            title: "database",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "config-email",
            title: "email",
            icon: <Icon component={IconGO}/>,
        },
        ],
    },
    {
        key: "controller",
        title: "controller",
        icon: '',
        children: [
        {
            key: "controller-admission",
            title: "admissioncontroller",
            icon: '',
            children: [
            {
                key: "controller-admission-admission",
                title: "admission.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-admission-admissionSetting",
                title: "admissionSetting.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-admission-payment",
                title: "payment.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-courses",
            title: "coursescontroller",
            icon: '',
            children: [
            {
                key: "controller-courses-course",
                title: "course.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-courses-coursestudent",
                title: "coursestudent.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-institute",
            title: "institutecontroller",
            icon: '',
            children: [
            {
                key: "controller-institute-module",
                title: "module.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-program",
                title: "program.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-programuser",
                title: "programuser.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-semester",
                title: "semester.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-student",
                title: "student.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-subsidiary",
                title: "subsidiary.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-subsidiaryuser",
                title: "subsidiaryuser.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-teacher",
                title: "teacher.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-teacherprogram",
                title: "teacherprogram.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-institute-unity",
                title: "unity.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-librarycontroller",
            title: "librarycontroller",
            icon: '',
            children: [
            {
                key: "controller-library-book",
                title: "book.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-library-category",
                title: "category.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-library-comment",
                title: "comment.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-library-like",
                title: "like.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-library-reading",
                title: "reading.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-messengercontroller",
            title: "messengercontroller",
            icon: '',
            children: [
            {
                key: "controller-messenger-group",
                title: "group.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-messenger-messenger",
                title: "messenger.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-monitoringcontroller",
            title: "monitoringcontroller",
            icon: '',
            children: [
            {
                key: "controller-monitoring-answer",
                title: "answer.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-monitoring-poll",
                title: "poll.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-monitoring-question",
                title: "question.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-monitoring-typequestion",
                title: "typequestion.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-publiccontroller",
            title: "publiccontroller",
            icon: '',
            children: [
            {
                key: "controller-public-admission",
                title: "admission.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-reviewcontroller",
            title: "reviewcontroller",
            icon: '',
            children: [
            {
                key: "controller-review-company",
                title: "company.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-review-review",
                title: "review.go",
                icon: <Icon component={IconGO}/>,
            },
            {
                key: "controller-review-reviewDetail",
                title: "reviewDetail.go",
                icon: <Icon component={IconGO}/>,
            },
            ],
        },
        {
            key: "controller-external",
            title: "external.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "controller-setting",
            title: "setting.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "controller-statistics",
            title: "statistics.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "controller-user",
            title: "user.go",
            icon: <Icon component={IconGO}/>,
        },
        ],
    },
    {
        key: "endpoint",
        title: "endpoint",
        icon: '',
        children: [
        {
            key: "endpoint-api",
            title: "api",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "endpoint-ws",
            title: "ws",
            icon: <Icon component={IconGO}/>,
        },
        ],
    },
    {
        key: "migration",
        title: "migration",
        icon: '',
        children: [
        {
            key: "migration-migration",
            title: "migration",
            icon: <Icon component={IconGO}/>,
        },
        ],
    },
    {
        key: "models",
        title: "models",
        icon: '',
        children: [
        {
            key: "models-AAdmission",
            title: "AAdmission.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-AAdmissionPayment",
            title: "AAdmissionPayment.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-AAdmissionSetting",
            title: "AAdmissionSetting.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-APayment",
            title: "APayment.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-CCourse",
            title: "CCourse.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-CCourseExam",
            title: "CCourseExam.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-CCourseStudent",
            title: "CCourseStudent.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-GRole",
            title: "GRole.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-GSetting",
            title: "GSetting.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-GUser",
            title: "GUser.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IModule",
            title: "IModule.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IModulesemester",
            title: "IModulesemester.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IProgram",
            title: "IProgram.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IProgramUser",
            title: "IProgramUser.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-ISemester",
            title: "ISemester.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IStudent",
            title: "IStudent.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IStudentHistory",
            title: "IStudentHistory.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IStudentProgram",
            title: "IStudentProgram.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IStudentStatus",
            title: "IStudentStatus.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-ISubsidiary",
            title: "ISubsidiary.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-ISubsidiaryUser",
            title: "ISubsidiaryUser.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-ITeacher",
            title: "ITeacher.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-ITeacherAction",
            title: "ITeacherAction.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-ITeacherProgram",
            title: "ITeacherProgram.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-IUnity",
            title: "IUnity.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-LBook",
            title: "LBook.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-LBookreading",
            title: "LBookreading.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-LCategory",
            title: "LCategory.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-LComment",
            title: "LComment.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-Llike",
            title: "Llike.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-LVote",
            title: "LVote.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-MAnswer",
            title: "MAnswer.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-MAnswerDetail",
            title: "MAnswerDetail.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-MPoll",
            title: "MPoll.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-MQuestion",
            title: "MQuestion.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-MTypeQuestion",
            title: "MTypeQuestion.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-MultipleQuestion",
            title: "MultipleQuestion.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-RCompany",
            title: "RCompany.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-RReview",
            title: "RReview.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-RReviewDetail",
            title: "RReviewDetail.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-SGroup",
            title: "SGroup.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-SMessage",
            title: "SMessage.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-SMessageRecipient",
            title: "SMessageRecipient.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-SReminderFrequency",
            title: "SReminderFrequency.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-SSession",
            title: "SSession.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "models-SUserGroup",
            title: "SUserGroup.go",
            icon: <Icon component={IconGO}/>,
        },
        ],
    },
    {
        key: "static",
        title: "static",
        icon: '',
        children: [
        {
            key: "static-app",
            title: "apps",
            icon: '',
        },
        {
            key: "static-boo",
            title: "books",
            icon: '',
        },
        {
            key: "static-cha",
            title: "chat",
            icon: '',
        },
        {
            key: "static-pro",
            title: "profile",
            icon: '',
        },
        {
            key: "static-bem",
            title: "nationalEmblem.jpg",
            icon: <Icon type="picture" />,
        },
        {
            key: "static-mil",
            title: "ministry.jpg",
            icon: <Icon type="picture" />,
        },
        {
            key: "static-mis",
            title: "ministrySmall.jpg",
            icon: <Icon type="picture" />,
        },
        {
            key: "static-log",
            title: "logo.jpg",
            icon: <Icon type="picture" />,
        },
        {
            key: "static-boo-j",
            title: "book.jpg",
            icon: <Icon type="picture" />,
        },
        {
            key: "static-setm",
            title: "data-set.min.js",
            icon: <Icon component={IconJs}/>,
        },
        ],
    },
    {
        key: "temp",
        title: "temp",
        icon: '',
    },
    {
        key: "templates",
        title: "templates",
        icon: '',
        children: [
        {
            key: "templates-email",
            title: "email.html",
            icon: <Icon component={IconHtml}/>,
        },
        {
            key: "templates-company",
            title: "templateCompany.xlsx",
            icon: <Icon type="file-excel"/>,
        },
        {
            key: "templates-courseStudent",
            title: "templateCourseStudent.xlsx",
            icon: <Icon type="file-excel"/>,
        },
        {
            key: "templates-student",
            title: "templateStudent.xlsx",
            icon: <Icon type="file-excel"/>,
        },
        {
            key: "templates-studentSA",
            title: "templateStudentSA.xlsx",
            icon: <Icon type="file-excel"/>,
        },
        {
            key: "templates-teacher",
            title: "templateTeacher.xlsx",
            icon: <Icon type="file-excel"/>,
        },
        {
            key: "templates-teacherSubsidiary",
            title: "templateTeacherSubsidiary.xlsx",
            icon: <Icon type="file-excel"/>,
        },
        ],
    },
    {
        key: "utilities",
        title: "utilities",
        icon: '',
        children: [
        {
            key: "utilities-counter",
            title: "counter.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "utilities-notice",
            title: "notice.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "utilities-request",
            title: "request.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "utilities-response",
            title: "response.go",
            icon: <Icon component={IconGO}/>,
        },
        {
            key: "utilities-token",
            title: "token.go",
            icon: <Icon component={IconGO}/>,
        },
        ],
    },
    {
        key: "editorconfig",
        title: ".editorconfig",
        icon: <Icon type="file" />,
    },
    {
        key: "gitignore",
        title: ".gitignore",
        icon: <Icon type="file" />,
    },
    {
        key: "config-json",
        title: "config.json",
        icon: <Icon type="file" />,
    },
    {
        key: "main",
        title: "main.go",
        icon: <Icon component={IconGO}/>,
    },
];

const dataList = [];
const generateList = (data) => {
    for (let i = 0; i < data.length; i++) {
        const node = data[i];
        const key = node.key;
        dataList.push({ key, title: key });
        if (node.children) {
        generateList(node.children, node.key);
        }
    }
};
generateList(gData);

const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
        if (node.children.some(item => item.key === key)) {
            parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
            parentKey = getParentKey(key, node.children);
        }
        }
    }
    return parentKey;
};

class SearchTree extends React.Component {
    state = {
        expandedKeys: [],
        searchValue: '',
        autoExpandParent: true,
    }

    handleCancel = (e) => {
        this.setState({
        modalVisible: false,
        });
    }

    onExpand = (expandedKeys) => {
        this.setState({
        expandedKeys,
        autoExpandParent: false,
        });
    }

    onSelectKey = (expandedKeys) => {
        Router.push({
        pathname: `/api/admision-servidor/${expandedKeys[0]}`
        })
    }

    onChange = (e) => {
        const value = e.target.value;
        const expandedKeys = dataList.map((item) => {
        if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, gData);
        }
        return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
        });
    }

    render() {
        const { searchValue, expandedKeys, autoExpandParent } = this.state;
        const loop = data => data.map((item) => {
        const index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substr(0, index);
        const afterStr = item.title.substr(index + searchValue.length);
        const title = index > -1 ? (
            <span>
            {beforeStr}
            <span style={{ color: '#f50' }}>{searchValue}</span>
            {afterStr}
            </span>
        ) : <span>{item.title}</span>;
        if (item.children) {
            return (
            <TreeNode key={item.key} title={title} icon={item.icon}>
                {loop(item.children)}
            </TreeNode>
            );
        }
        return <TreeNode key={item.key} title={title} icon={item.icon}/>;
        });
        return (
        <React.Fragment>
            <Search style={{ margin: 8, paddingTop: 8 }} placeholder="Buscar" onChange={this.onChange} />
            <div style={{overflowY: 'auto', height: 'calc(100vh - 56px)'}}>
                <DirectoryTree
                    onExpand={this.onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onSelect={this.onSelectKey}
                >
                    {loop(gData)}
                </DirectoryTree>
            </div>
        </React.Fragment>
        );
    }
}

export default SearchTree;