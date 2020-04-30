using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using NLua;

namespace GearSwop
{
    public class LuaResources
    {
        private static Dictionary<int, Dictionary<string, string>> LoadLuaResource(string filepath)
        {
            var lua = new Lua();
            lua.LoadCLRPackage();
            var result = lua.DoFile(filepath);
            LuaTable resultLuaTable = (LuaTable)result[0];
            
            var items = new Dictionary<int, Dictionary<string, string>>();
            Dictionary<object, object> itemsDict = lua.GetTableDict(resultLuaTable);
            foreach (KeyValuePair<object, object> itemPair in itemsDict)
            {
                Dictionary<object, object> objectDict = lua.GetTableDict((LuaTable) itemPair.Value);
                var json = JsonConvert.SerializeObject(objectDict);
                var item = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
                items[Int32.Parse(item["id"])] = item;
            }

            return items;
        }

    }
}