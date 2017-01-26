module.exports = { "schema": { "namespace": "Ecat.DataLib.Context", "alias": "Self", "annotation:UseStrongSpatialTypes": "false", "xmlns:annotation": "http://schemas.microsoft.com/ado/2009/02/edm/annotation", "xmlns:customannotation": "http://schemas.microsoft.com/ado/2013/11/edm/customannotation", "xmlns": "http://schemas.microsoft.com/ado/2009/11/edm", "cSpaceOSpaceMapping": "[[\"Ecat.DataLib.Context.Person\",\"Ecat.ModelLib.DomainModel.User.Person\"]]", "entityType": { "name": "Person", "customannotation:ClrType": "Ecat.ModelLib.DomainModel.User.Person, Ecat.ModelLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "key": { "propertyRef": { "name": "Id" } }, "property": [{ "name": "Id", "type": "Edm.Int32", "nullable": "false", "annotation:StoreGeneratedPattern": "Identity" }, { "name": "LastName", "type": "Edm.String", "maxLength": "50", "fixedLength": "false", "unicode": "true" }, { "name": "FirstName", "type": "Edm.String", "maxLength": "50", "fixedLength": "false", "unicode": "true" }] }, "entityContainer": { "name": "UserCtx", "customannotation:UseClrTypes": "true", "entitySet": { "name": "Persons", "entityType": "Self.Person" } } } };
