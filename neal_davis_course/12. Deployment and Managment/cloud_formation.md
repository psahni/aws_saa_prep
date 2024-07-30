### Cloud Formation
    Template file
        Json/Yaml
    Define entire app stack in template
    When u upload changed template, it will show you the changes (Change Set)


In CloudFormation, a template is a JSON or a YAML-formatted text file that describes your AWS infrastructure. Templates include several major sections. 

The Resources section is the only required section. Some sections in a template can be in any order. However, as you build your template, it might be helpful to use the logical ordering of the following list, as values in one section might refer to values from a previous section. Take note that all of the sections here are optional, except for Resources, which is the only one required.

- Format Version
- Description
- Metadata
- Parameters
- Mappings
- Conditions
- Transform
- Resources (required)
- Outputs