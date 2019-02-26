import CurrentAppLayout from './../../../components/Layouts/AdmisionServerLayout';
import { Pre, Code, InlineCode } from '../../../components/Code';
import DataMDX from './models-IModulesemester.mdx';

export default ()=>(
  <CurrentAppLayout title="Admisión Email">
      <DataMDX
        components={{ pre: Pre, code: Code, inlineCode: InlineCode }}
      />
  </CurrentAppLayout>
);