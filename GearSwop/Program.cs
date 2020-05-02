using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using GearSwop.GearRepository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using NLua;

namespace GearSwop
{
    public class Program
    {
        public static void Main(string[] args)
        {
            makeItemResource();
            CreateHostBuilder(args).Build().Run();
        }

        private static void makeItemResource()
        {
            var items = LoadLuaResource("./Temp/items.lua");
            var itemDescriptions = LoadLuaResource("./Temp/item_descriptions.lua");

            var id = 11697;
            //Console.WriteLine(items[id]["en"]);
            //Console.WriteLine(itemDescriptions[id]["en"]);

            var allItems = MergeItems(items, itemDescriptions);
            
            //open file stream
            using (StreamWriter file = File.CreateText(@".\GearRepository\items.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                //serialize object directly into file stream
                serializer.Serialize(file, allItems);
            }
        }

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

        private static Dictionary<int, Item> MergeItems(
            Dictionary<int, Dictionary<string, string>> items,
            Dictionary<int, Dictionary<string, string>> itemDescriptions)
        {
            var slotMap = new Dictionary<int, string>
            {
                [0] = "Main",
                [1] = "Sub",
                [2] = "Range",
                [3] = "Ammo",
                [4] = "Head",
                [5] = "Body",
                [6] = "Hands",
                [7] = "Legs",
                [8] = "Feet",
                [9] = "Neck",
                [10] = "Waist",
                [11] = "Left Ear",
                [12] = "Right Ear",
                [13] = "Left Ring",
                [14] = "Right Ring",
                [15] = "Back"
            };
            var jobMap = new Dictionary<int, string>
            {
                [0] = "NON",
                [1] = "WAR",
                [2] = "MNK",
                [3] = "WHM",
                [4] = "BLM",
                [5] = "RDM",
                [6] = "THF",
                [7] = "PLD",
                [8] = "DRK",
                [9] = "BST",
                [10] = "BRD",
                [11] = "RNG",
                [12] = "SAM",
                [13] = "NIN",
                [14] = "DRG",
                [15] = "SMN",
                [16] = "BLU",
                [17] = "COR",
                [18] = "PUP",
                [19] = "DNC",
                [20] = "SCH",
                [21] = "GEO",
                [22] = "RUN",
                [23] = "MON",
            };
            var flagMap = new Dictionary<int, string>
            {
                [6] = "Aug",
                [15] = "Rare",
                [14] = "Ex",
            };
            var finalItems = new Dictionary<int, Item>();
            foreach (KeyValuePair<int, Dictionary<string, string>> itemData in items)
            {
                Console.WriteLine(itemData.Value["category"]+itemData.Value["id"]);
                if (itemData.Value["category"] != "Armor" && itemData.Value["category"] != "Weapon")
                {
                    continue;
                }
                var item = new Item();
                item.ItemId = itemData.Value["id"];
                item.Name = itemData.Value["en"];
                item.LName = itemData.Value["enl"];
                item.Slots = ParseBitfieldMap(Int32.Parse(itemData.Value["slots"]), slotMap);
                item.Jobs = ParseBitfieldMap(Int32.Parse(itemData.Value["jobs"]), jobMap);
                item.Flags = ParseBitfieldMap(Int32.Parse(itemData.Value["flags"]), flagMap);
                item.Lvl = Int32.Parse(itemData.Value["level"]);
                if (itemDescriptions.ContainsKey(itemData.Key))
                {
                    item.Description = itemDescriptions[itemData.Key]["en"];
                }
                else
                {
                    item.Description = "";
                }
                if (itemData.Value.ContainsKey("item_level"))
                {
                    item.ItemLevel = Int32.Parse(itemData.Value["item_level"]);
                }
                else
                {
                    item.ItemLevel = item.Lvl;
                }
                finalItems[itemData.Key] = item;
            }

            return finalItems;
        }
       

        private static List<string> ParseBitfieldMap(int i, Dictionary<int, string> map)
        {
            //Console.WriteLine(i);
            var result = new List<string>();
            var istring = Convert.ToString(i, 2).ToCharArray();
            //Console.WriteLine(istring);
            for (int b = istring.Length-1; b >= 0; b--)
            {
                if (istring[b] != '0')
                {
                    //Console.WriteLine(istring.Length - b - 1);
                    if (map.ContainsKey(istring.Length - b - 1))
                    {
                        result.Add(map[istring.Length - b - 1]);
                    }
                }
            }

            return result;
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}